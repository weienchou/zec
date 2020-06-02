import h from "./helper";
import $ from "cash-dom";

export default class Zec {
    constructor(autoInit = false) {
        this.version = "1.0.1";
        this.ta = "zec";
        this.debug = true;

        this.fn = {};
        this.modules = {};
        this.extends = {};

        this.body = $("body");
        this.docu = $(document);


        if (autoInit) {
            this.docu.ready(() => {
                this.init();
            });
        }
    }

    import(name, m) {
        this.modules[name] = new m();
    }

    extends(name, m) {
        this.extends[name] = new m();
    }

    init(box = this.body, ta = this.ta) {
        let els = $(`.${this.ta}`, box);

        this.log(`${this.ta} init.`);

        els.toggleClass(`${this.ta} zing`);

        els.map((el) => {
            const plant = [];
            const me = $(els[el]);
            const func = me.data("do");

            if (h.isset(func)) {
                const es = func.replace(/\s/, "").split(",");
                es.forEach(e => {
                    const works = e.split(":");
                    plant.push({
                        type: works[0],
                        func: works[1],
                    });
                });
            }

            me.data("plant", plant);

            plant.map((item) => {
                const fn = item.func;

                if (!this.check(fn)) {
                    this.error(`${fn} load fail.`);
                } else {
                    if (item.type.toLowerCase() === "init") {
                        this.exec(fn, me);
                    } else {
                        me.on(item.type, (e) => {
                            me.event = e;
                            this.handler.call(this, me);
                        });
                    }
                }
            })
        });

        els.toggleClass(`zing`, false);
    }

    exec(funcName, ta) {
        const func = this.fn[funcName] || this.notfound;

        this.log(`EXEC::${funcName}`);

        return func.call(this, ta);
    }

    handler(ta) {
        const plant = ta.data("plant");
        const nopde = ta.attr("data-nopde");

        this.log(`EXEC::handler ${ta.event.type}`);
        if (parseInt(nopde, 10) === 1) {
            ta.event.preventDefault();
            this.log("NOPDE");
        }

        plant.find((item) => {
            if (item.type === ta.event.type) {
                this.exec(item.func, ta);
            }
        });
    }

    hook(name, func, e) {
        if (!this.check(name)) {
            this.fn[name] = func;
        } else {
            this.log(`${name} overwrite`);
        }
    }

    notfound() {
        this.error();
    }

    check(func) {
        return h.isset(this.fn[func]);
    }

    log(...msg) {
        if (!h.isset(console) || this.debug === false) {
            return true;
        }

        console.log(...msg);
    }

    error(...msg) {
        if (!h.isset(console) || this.debug === false) {
            return true;
        }

        console.error("%cZEC::Error::", "color: #ffcc00", ...msg);
    }
}