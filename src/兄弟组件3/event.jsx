class Event {
    constructor() {
        this.events = this.events || new Map();
    }
}

//触发
Event.prototype.emit = function(type, ...args) {
    let handler = this.events.get(type);

    if(handler && Array.isArray(handler)) {
        for(let i=0, l=handler.length; i<l; i++) {
            if(args.length > 0) {
                handler[i].apply(this, args);
            }else {
                handler[i].call(this);
            }
        }
    }else {
        if(args.length > 0) {
            handler.apply(this, args);
        }else {
            handler.call(this);
        }
    }

    return;

}

// 订阅
Event.prototype.on = function(type, fn) {
    const handler = this.events.get(type);

    if(!handler) {
        this.events.set(type, fn);
    }else if(handler && typeof handler === 'function') {
        this.events.set(type, [handler, fn]);
    }else {
        handler.push(fn);
    }
}

// 移除监听

Event.prototype.remove = function(type, fn) {
    const handler = this.events.get(type);

    if(handler && typeof handler === 'function') {
        this.events.delete(type, fn);
    }else {
        let position = -1;
        for (let i = 0; i < handler.length; i++) {
            if (handler[i] === fn) {
                position = i;
                return;
            }
        }

        if(position !== -1) {
            handler.splice(position, 1);
            if(handler.length === 1) {
                this.events.set(type, handler[0]);
            }
        }else {
            return this;
        }
    }
}

export default new Event();