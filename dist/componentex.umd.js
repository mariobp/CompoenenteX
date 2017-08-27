(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/http'), require('rxjs/add/operator/catch'), require('rxjs/add/operator/map'), require('rxjs/add/operator/toPromise'), require('@angular/router')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/http', 'rxjs/add/operator/catch', 'rxjs/add/operator/map', 'rxjs/add/operator/toPromise', '@angular/router'], factory) :
	(factory((global.componentex = {}),global._angular_core,global._angular_common,global._angular_http,null,null,null,global._angular_router));
}(this, (function (exports,_angular_core,_angular_common,_angular_http,rxjs_add_operator_catch,rxjs_add_operator_map,rxjs_add_operator_toPromise,_angular_router) { 'use strict';

var SampleComponent = (function () {
    function SampleComponent() {
    }
    return SampleComponent;
}());
SampleComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'sample-component',
                template: "<h1>Sample component</h1>"
            },] },
];
/**
 * @nocollapse
 */
SampleComponent.ctorParameters = function () { return []; };

var SampleDirective = (function () {
    /**
     * @param {?} el
     */
    function SampleDirective(el) {
        this.el = el;
    }
    return SampleDirective;
}());
SampleDirective.decorators = [
    { type: _angular_core.Directive, args: [{
                selector: '[sampleDirective]'
            },] },
];
/**
 * @nocollapse
 */
SampleDirective.ctorParameters = function () { return [
    { type: _angular_core.ElementRef, },
]; };

/**
 * Transforms any input value
 */
var SamplePipe = (function () {
    function SamplePipe() {
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    SamplePipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = null; }
        return value;
    };
    return SamplePipe;
}());
SamplePipe.decorators = [
    { type: _angular_core.Pipe, args: [{
                name: 'samplePipe'
            },] },
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
SamplePipe.ctorParameters = function () { return []; };

var SampleService = (function () {
    function SampleService() {
    }
    return SampleService;
}());
SampleService.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
SampleService.ctorParameters = function () { return []; };

var CallService = (function () {
    /**
     * @param {?} _http
     */
    function CallService(_http) {
        this._http = _http;
        this.json = { 'Content-Type': 'application/json' };
        window._server = this.ip;
    }
    /**
     * @param {?} ip
     * @return {?}
     */
    CallService.prototype.conf = function (ip) {
        this._ip = ip;
        window._server = this.ip;
    };
    Object.defineProperty(CallService.prototype, "ip", {
        /**
         * @return {?}
         */
        get: function () {
            if (!!this._ip) {
                var /** @type {?} */ proto = !!this._ip.protocol ? this._ip.protocol : 'http';
                var /** @type {?} */ port = !!this._ip.port && this._ip.port !== '80' ? ":" + this._ip.port : '';
                return proto + "://" + this._ip.host + port;
            }
            return '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} url
     * @return {?}
     */
    CallService.prototype.getUrl = function (url) {
        var /** @type {?} */ ip = this.ip;
        var /** @type {?} */ auxUrl = "/" + url;
        if (ip) {
            auxUrl = "" + ip + auxUrl;
        }
        return auxUrl;
    };
    /**
     * @param {?} headersList
     * @param {?=} par
     * @return {?}
     */
    CallService.prototype.getOptions = function (headersList, par) {
        var /** @type {?} */ options = new _angular_http.RequestOptions();
        var /** @type {?} */ headers = new _angular_http.Headers();
        headersList = headersList || this.json;
        for (var /** @type {?} */ key in headersList) {
            if (headersList[key]) {
                headers.append(key, headersList[key]);
            }
        }
        if (!!par) {
            var /** @type {?} */ query = new _angular_http.URLSearchParams();
            for (var /** @type {?} */ key in par) {
                if (par[key]) {
                    query.set(key, par[key]);
                }
            }
            options.search = query;
        }
        options.headers = headers;
        options.withCredentials = true;
        return options;
    };
    /**
     * @param {?} url
     * @param {?=} params
     * @param {?=} head
     * @return {?}
     */
    CallService.prototype.get = function (url, params, head) {
        return this._http.get(this.getUrl(url), this.getOptions(head, params))
            .toPromise()
            .catch(this.error);
    };
    /**
     * @param {?} url
     * @param {?=} head
     * @return {?}
     */
    CallService.prototype.delete = function (url, head) {
        return this._http.delete(this.getUrl(url), this.getOptions(head))
            .toPromise()
            .catch(this.error);
    };
    /**
     * @param {?} url
     * @param {?=} head
     * @return {?}
     */
    CallService.prototype.head = function (url, head) {
        return this._http.delete(this.getUrl(url), this.getOptions(head))
            .toPromise()
            .catch(this.error);
    };
    /**
     * @param {?} url
     * @param {?=} body
     * @param {?=} head
     * @return {?}
     */
    CallService.prototype.post = function (url, body, head) {
        return this._http.post(this.getUrl(url), body, this.getOptions(head))
            .toPromise()
            .catch(this.error);
    };
    /**
     * @param {?} url
     * @param {?=} body
     * @param {?=} head
     * @return {?}
     */
    CallService.prototype.put = function (url, body, head) {
        return this._http.put(this.getUrl(url), body, this.getOptions(head))
            .toPromise()
            .catch(this.error);
    };
    /**
     * @param {?} url
     * @param {?=} body
     * @param {?=} head
     * @return {?}
     */
    CallService.prototype.patch = function (url, body, head) {
        return this._http.patch(this.getUrl(url), body, this.getOptions(head))
            .toPromise()
            .catch(this.error);
    };
    /**
     * @param {?} error
     * @return {?}
     */
    CallService.prototype.error = function (error) {
        var /** @type {?} */ res;
        switch (error.status) {
            case 0:
                res = {
                    title: 'Sin Conexión!',
                    text: 'Verifique su Conexión a Internet.',
                    error: error
                };
                break;
            case 400:
                res = {
                    title: '400',
                    text: '400',
                    error: error
                };
                break;
            case 403:
                res = {
                    title: 'Sin Acceso!',
                    text: 'Usted no tiene permitido realizar este cambio.',
                    error: error
                };
                break;
            case 404:
                res = {
                    title: 'No se pudo encontrar el objeto!',
                    error: error
                };
                break;
            case 408:
                res = {
                    title: 'Su solicitud ha tardado mucho tiempo!',
                    text: 'Por favor verifique su Conexión a Internet y vuelva a intentarlo.',
                    error: error
                };
                break;
            default:
                res = { error: error };
                break;
        }
        return Promise.reject(res);
    };
    return CallService;
}());
CallService.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
CallService.ctorParameters = function () { return [
    { type: _angular_http.Http, },
]; };

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CrudBase = (function () {
    /**
     * @param {?} _cl
     * @param {?} router
     */
    function CrudBase(_cl, router) {
        this._cl = _cl;
        this.router = router;
        this.conf = {};
    }
    /**
     * @param {?} conf
     * @return {?}
     */
    CrudBase.prototype.init = function (conf) {
        this.conf = conf;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    CrudBase.prototype.setAddUrl = function (val) {
        this.conf.add = val;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    CrudBase.prototype.setEditUrl = function (val) {
        this.conf.edit = val;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    CrudBase.prototype.setRedirectUrl = function (val) {
        this.conf.redirect = val;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    CrudBase.prototype.setDeleteUrl = function (val) {
        this.conf.delete = val;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    CrudBase.prototype.setListUrl = function (val) {
        this.conf.list = val;
    };
    Object.defineProperty(CrudBase.prototype, "addUrl", {
        /**
         * @return {?}
         */
        get: function () {
            return this.conf.add;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrudBase.prototype, "editUrl", {
        /**
         * @return {?}
         */
        get: function () {
            return this.conf.edit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrudBase.prototype, "redirectUrl", {
        /**
         * @return {?}
         */
        get: function () {
            return this.conf.redirect;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrudBase.prototype, "deleteUrl", {
        /**
         * @return {?}
         */
        get: function () {
            return this.conf.delete;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrudBase.prototype, "listUrl", {
        /**
         * @return {?}
         */
        get: function () {
            return this.conf.list;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} id
     * @return {?}
     */
    CrudBase.prototype.getById = function (id) {
        if (id === 0) {
            return Promise.resolve({});
        }
        
        if (this.data) {
            var /** @type {?} */ res = this.data.filter(function (item) { return item.id === id; });
            if (!!res[0]) {
                return Promise.resolve(res[0]);
            }
        }
        return this.list({ id: id }).then(function (data) { return data.json(); }).then(function (data) { return Promise.resolve(data.object_list[0]); });
    };
    /**
     * @param {?} query
     * @return {?}
     */
    CrudBase.prototype.list = function (query) {
        if (!!this.conf.list) {
            return this._cl.get(this.conf.list, query, this._cl.json);
        }
        else {
            throw new SyntaxError('No se ha configurado url para listar');
            // return Promise.reject();
        }
    };
    /**
     * @param {?} body
     * @return {?}
     */
    CrudBase.prototype.add = function (body) {
        if (!!this.conf.add) {
            return this._cl.post(this.conf.add, body);
        }
        else {
            throw new SyntaxError('No se ha configurado url para agregar');
        }
    };
    /**
     * @param {?} id
     * @param {?} body
     * @return {?}
     */
    CrudBase.prototype.edit = function (id, body) {
        if (!!this.conf.edit) {
            return this._cl.post(this.conf.edit.replace('$(id)', "" + id), body);
        }
        else {
            throw new SyntaxError('No se ha configurado url para editar');
        }
    };
    /**
     * @param {?} id
     * @return {?}
     */
    CrudBase.prototype.delete = function (id) {
        if (!!this.conf.delete) {
            return this._cl.delete(this.conf.delete.replace('$(id)', "" + id));
        }
        else {
            throw new SyntaxError('No se ha configurado url para borrar');
        }
    };
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    CrudBase.prototype.resolve = function (route, state) {
        var _this = this;
        var /** @type {?} */ id = route.params['id'];
        if (isNaN(+id)) {
            // console.log(`Item id was not a number: ${id}`);
            this.router.navigate([this.conf.redirect || '/']);
            return null;
        }
        return this.getById(+id)
            .then(function (item) {
            if (item) {
                return item;
            }
            console.log("Item was not found: " + id);
            _this.router.navigate([_this.conf.redirect || '/']);
            return null;
        })
            .catch(function (error) {
            console.log("Retrieval error: " + error);
            _this.router.navigate([_this.conf.redirect || '/']);
            return null;
        });
    };
    /**
     * @param {?} aurl
     * @param {?} id
     * @param {?} formt
     * @return {?}
     */
    CrudBase.prototype.down = function (aurl, id, formt) {
        var /** @type {?} */ url = "" + this._cl.getUrl(aurl) + id;
        var /** @type {?} */ form = document.createElement('form');
        var /** @type {?} */ input = document.createElement('input');
        var /** @type {?} */ button = document.createElement('button');
        button.setAttribute('type', 'submit');
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', 'file_format');
        input.setAttribute('value', '' + formt);
        form.setAttribute('action', url);
        form.setAttribute('method', 'POST');
        form.setAttribute('target', '_blank');
        form.appendChild(input);
        form.appendChild(button);
        document.body.appendChild(form);
        button.click();
        document.body.removeChild(form);
    };
    return CrudBase;
}());
var CrudService = (function (_super) {
    __extends(CrudService, _super);
    /**
     * @param {?} _cl
     * @param {?} _rt
     * @param {?} base_url
     */
    function CrudService(_cl, _rt, base_url) {
        var _this = _super.call(this, _cl, _rt) || this;
        _this._cl = _cl;
        _this._rt = _rt;
        _this.base_url = base_url;
        _this.setBaseUrl(base_url);
        return _this;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    CrudService.prototype.setBaseUrl = function (val) {
        this.base_url = val;
        _super.prototype.init.call(this, {
            redirect: this.base_url,
            list: this.base_url + "list/",
            add: this.base_url + "form/",
            edit: this.base_url + "form/$(id)/",
            delete: this.base_url + "delete/$(id)/"
        });
    };
    return CrudService;
}(CrudBase));

var CallService$1 = (function () {
    /**
     * @param {?} _http
     */
    function CallService(_http) {
        this._http = _http;
        this.json = { 'Content-Type': 'application/json' };
        window._server = this.ip;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    CallService.prototype.getUrl = function (url) {
        var /** @type {?} */ ip = this.ip;
        var /** @type {?} */ auxUrl = "/" + url;
        if (ip) {
            auxUrl = "" + ip + auxUrl;
        }
        return auxUrl;
    };
    /**
     * @param {?} ip
     * @return {?}
     */
    CallService.prototype.conf = function (ip) {
        this._ip = ip;
        window._server = this.ip;
    };
    Object.defineProperty(CallService.prototype, "ip", {
        /**
         * @return {?}
         */
        get: function () {
            if (!!this._ip) {
                var /** @type {?} */ proto = !!this._ip.protocol ? this._ip.protocol : 'http';
                var /** @type {?} */ port = !!this._ip.port && this._ip.port !== '80' ? ":" + this._ip.port : '';
                return proto + "://" + this._ip.host + port;
            }
            return '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} headersList
     * @param {?=} par
     * @return {?}
     */
    CallService.prototype.getOptions = function (headersList, par) {
        var /** @type {?} */ options = new _angular_http.RequestOptions();
        var /** @type {?} */ headers = new _angular_http.Headers();
        headersList = headersList || this.json;
        for (var /** @type {?} */ key in headersList) {
            if (headersList[key]) {
                headers.append(key, headersList[key]);
            }
        }
        if (!!par) {
            var /** @type {?} */ query = new _angular_http.URLSearchParams();
            for (var /** @type {?} */ key in par) {
                if (par[key]) {
                    query.set(key, par[key]);
                }
            }
            options.search = query;
        }
        options.headers = headers;
        options.withCredentials = true;
        return options;
    };
    /**
     * @param {?} url
     * @param {?=} params
     * @param {?=} head
     * @return {?}
     */
    CallService.prototype.get = function (url, params, head) {
        // console.log(this.getUrl(url));
        return this._http.get(this.getUrl(url), this.getOptions(head, params)).toPromise();
    };
    /**
     * @param {?} url
     * @param {?=} head
     * @return {?}
     */
    CallService.prototype.delete = function (url, head) {
        return this._http.delete(this.getUrl(url), this.getOptions(head)).toPromise();
    };
    /**
     * @param {?} url
     * @param {?=} head
     * @return {?}
     */
    CallService.prototype.head = function (url, head) {
        return this._http.delete(this.getUrl(url), this.getOptions(head)).toPromise();
    };
    /**
     * @param {?} url
     * @param {?=} body
     * @param {?=} head
     * @return {?}
     */
    CallService.prototype.post = function (url, body, head) {
        return this._http.post(this.getUrl(url), body, this.getOptions(head)).toPromise();
    };
    /**
     * @param {?} url
     * @param {?=} body
     * @param {?=} head
     * @return {?}
     */
    CallService.prototype.put = function (url, body, head) {
        return this._http.put(this.getUrl(url), body, this.getOptions(head)).toPromise();
    };
    /**
     * @param {?} url
     * @param {?=} body
     * @param {?=} head
     * @return {?}
     */
    CallService.prototype.patch = function (url, body, head) {
        return this._http.patch(this.getUrl(url), body, this.getOptions(head)).toPromise();
    };
    return CallService;
}());
CallService$1.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
CallService$1.ctorParameters = function () { return [
    { type: _angular_http.Http, },
]; };

var BsNotify = (function () {
    function BsNotify() {
    }
    /**
     * @param {?} message
     * @param {?} icon
     * @param {?=} type
     * @return {?}
     */
    BsNotify.notify = function (message, icon, type) {
        if (type === void 0) { type = ''; }
        $.notify({ icon: icon, message: message }, { type: type, timer: 1500, placement: { from: 'top', align: 'right' } });
    };
    /**
     * @param {?} message
     * @return {?}
     */
    BsNotify.error = function (message) {
        this.notify(message, 'error_outline', this.color.DANGER);
    };
    /**
     * @param {?} message
     * @return {?}
     */
    BsNotify.ok = function (message) {
        this.notify(message, 'done', this.color.SUCCESS);
    };
    /**
     * @param {?} message
     * @return {?}
     */
    BsNotify.warn = function (message) {
        this.notify(message, 'warning', this.color.WARNING);
    };
    /**
     * @param {?} message
     * @return {?}
     */
    BsNotify.info = function (message) {
        this.notify(message, 'info_outline', this.color.INFO);
    };
    return BsNotify;
}());
BsNotify.color = {
    INFO: 'info',
    SUCCESS: 'success',
    WARNING: 'warning',
    DANGER: 'danger',
    ROSE: 'rose',
    PRIMARY: 'primary'
};

var FormComponent = (function () {
    /**
     * @param {?} _ar
     */
    function FormComponent(_ar) {
        this._ar = _ar;
        this.deleteable = true;
        this.saveable = true;
        this.otro = true;
        this.debug = false;
        this.retur = true;
        this.errorMessages = {
            email: 'Ingrese una dirección de correo valida',
            required: 'Este campo es requerido',
            url: 'Ingrese una url',
            min: function (data) {
                return "El valor debe ser mayor o igual a " + data.min + ", actualmente es " + data.actual;
            },
            max: function (data) {
                return "El valor debe ser menor o igual a " + data.max + ", actualmente es " + data.actual;
            },
            minlength: function (data) {
                return "El numero de caracteres debe ser mayor o igual a " + data.requiredLength + ", actualmente es " + data.actualLength;
            },
            maxlength: function (data) {
                return "El numero de caracteres debe ser menor o igual a " + data.requiredLength + ", actualmente es " + data.actualLength;
            },
        };
    }
    /**
     * @param {?} val
     * @return {?}
     */
    FormComponent.prototype.setReady = function (val) {
        this._ready = val;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    FormComponent.prototype.setItem = function (item) {
        item = this.prePatchValue(item);
        if (item) {
            this.item = item;
            this.form.patchValue(this.item);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FormComponent.prototype.prePatchValue = function (value) {
        return value;
    };
    /**
     * @return {?}
     */
    FormComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!!this._ar.snapshot.data['item'] && Object.keys(this._ar.snapshot.data['item']).length !== 0) {
            this.setItem(this._ar.snapshot.data['item']);
        }
        this.form.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
    };
    /**
     * @return {?}
     */
    FormComponent.prototype.ngAfterViewInit = function () {
        var /** @type {?} */ self = this;
        // format: 'H:mm', use this format if you want the 24hours timepicker
        // format: 'h:mm A' use this format if you want the 12hours timpiecker with AM/PM toggle
        var /** @type {?} */ dt = 'DD/MM/YYYY h:mm A';
        var /** @type {?} */ d = 'DD/MM/YYYY';
        var /** @type {?} */ t = 'h:mm A';
        var /** @type {?} */ op = {
            time: 'fa fa-clock-o',
            date: 'fa fa-calendar',
            up: 'fa fa-chevron-up',
            down: 'fa fa-chevron-down',
            previous: 'fa fa-chevron-left',
            next: 'fa fa-chevron-right',
            today: 'fa fa-screenshot',
            clear: 'fa fa-trash',
            close: 'fa fa-remove',
            inline: true
        };
        $('.datetimepicker').datetimepicker({ format: dt, icons: op });
        $('.datepicker').datetimepicker({ format: d, icons: op });
        $('.timepicker').datetimepicker({ format: 'h:mm A', icons: op });
        $('.datetimepicker').on('dp.change', function (e) {
            self.form.get($(this).attr('name')).setValue($(this).datetimepicker({ format: dt }).val());
        });
        $('.datepicker').on('dp.change', function (e) {
            self.form.get($(this).attr('name')).setValue($(this).datetimepicker({ format: d }).val());
        });
        $('.timepicker').on('dp.change', function (e) {
            self.form.get($(this).attr('name')).setValue($(this).datetimepicker({ format: t }).val());
        });
    };
    /**
     * @param {?} data
     * @return {?}
     */
    FormComponent.prototype.onValueChanged = function (data) {
        var _this = this;
        if (!this.form) {
            return;
        }
        var _loop_1 = function (input) {
            input.error = (function () {
                var /** @type {?} */ control = _this.form.get(input.name);
                if (control && control.dirty && !control.valid) {
                    var /** @type {?} */ res = '';
                    for (var /** @type {?} */ key in control.errors) {
                        if (!!control.errors[key]) {
                            var /** @type {?} */ messege = '';
                            var /** @type {?} */ errors = _this.errorMessages[key];
                            if (typeof errors === 'function') {
                                messege = errors(control.errors[key]);
                            }
                            else {
                                messege = errors;
                            }
                            res += messege || key + ' ';
                        }
                    }
                    return res;
                }
                return null;
            })();
        };
        for (var _i = 0, _a = this.renderinputs; _i < _a.length; _i++) {
            var input = _a[_i];
            _loop_1(/** @type {?} */ input);
        }
    };
    /**
     * @return {?}
     */
    FormComponent.prototype.isValid = function () {
        return this.form.valid;
    };
    /**
     * @param {?} col1
     * @param {?} col2
     * @param {?} item
     * @return {?}
     */
    FormComponent.prototype.isRender = function (col1, col2, item) {
        if (item) {
            return col1 === col2 && !this.item;
        }
        else {
            return col1 === col2;
        }
    };
    /**
     * @param {?=} back
     * @return {?}
     */
    FormComponent.prototype.save = function (back) {
        var _this = this;
        if (!!this.service && this.form.valid) {
            var /** @type {?} */ body = this.preSave(this.form.value);
            this._ready = true;
            if (!!this.item) {
                this.service.edit(this.item.id, body)
                    .then(function (data) {
                    _this._ready = false;
                    _this.successful(data);
                    swal({
                        title: 'Guardado!',
                        text: 'Registro se guardo con exito',
                        type: 'success',
                        confirmButtonColor: '#213b78',
                    });
                })
                    .catch(function (error) { return _this._error(error, 'Ha ocurrido un error al intentar gurdar los datos'); });
            }
            else {
                this.service.add(body)
                    .then(function (data) {
                    _this.form.reset();
                    _this._ready = false;
                    swal({
                        title: 'Guardado!',
                        text: 'Registro se guardo con exito',
                        type: 'success',
                        confirmButtonColor: '#213b78',
                    });
                    if (!back) {
                        _this.successful(data);
                    }
                })
                    .catch(function (error) { return _this._error(error, 'Ha ocurrido un error al intentar gurdar los datos'); });
            }
        }
        else {
            console.error('no se ha definido un service para este formulario');
        }
    };
    /**
     * @param {?} errs
     * @return {?}
     */
    FormComponent.prototype._findErros = function (errs) {
        if (errs) {
            var _loop_2 = function (input) {
                input.error = (function () {
                    for (var /** @type {?} */ key in errs) {
                        if (!!errs[key] && input.name === key) {
                            return errs[key];
                        }
                    }
                    return null;
                })();
            };
            for (var _i = 0, _a = this.renderinputs; _i < _a.length; _i++) {
                var input = _a[_i];
                _loop_2(/** @type {?} */ input);
            }
        }
    };
    /**
     * @return {?}
     */
    FormComponent.prototype.delete = function () {
        var _this = this;
        if (!!this.service && !!this.item && this.deleteable) {
            swal({
                title: 'Está seguro?',
                text: 'Se eliminará 1 registro.',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#213b78',
                cancelButtonColor: '#ff9800',
                cancelButtonText: 'Cancelar',
                confirmButtonText: 'Eliminar'
            }).then(function () {
                _this.service.delete(_this.item.id)
                    .then(function (data) {
                    _this.successful(data);
                    _this.back();
                    swal({
                        title: 'Eliminado!',
                        text: 'Registros se eliminado con exito',
                        type: 'success',
                        confirmButtonColor: '#213b78',
                    });
                })
                    .catch(function (err) {
                    console.log(err);
                    _this._error(err, 'No se han podido eliminar los registros');
                });
            }, function () { });
        }
    };
    /**
     * @param {?} body
     * @return {?}
     */
    FormComponent.prototype.preSave = function (body) {
        return body;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    FormComponent.prototype.successful = function (data) { };
    /**
     * @return {?}
     */
    FormComponent.prototype.back = function () {
        this.successful(null);
    };
    /**
     * @param {?} error
     * @return {?}
     */
    FormComponent.prototype.error = function (error) { };
    /**
     * @param {?} error
     * @param {?} defaultMgs
     * @return {?}
     */
    FormComponent.prototype._error = function (error, defaultMgs) {
        this._ready = false;
        console.log(error);
        switch (error.status) {
            case 0:
                console.log(error);
                swal({
                    title: 'Sin Conexión!',
                    text: 'Verifique su Conexión a Internet.',
                    type: 'warning',
                    confirmButtonColor: '#213b78',
                });
                break;
            case 400:
                this.error(error);
                this._findErros(error.json());
                break;
            case 403:
                swal({
                    title: 'Sin Acceso!',
                    text: 'Usted no tiene permitido realizar este cambio.',
                    type: 'warning',
                    confirmButtonColor: '#213b78',
                });
                break;
            case 404:
                swal({
                    title: 'No se pudo encontrar el objeto!',
                    // text: 'Usted no tiene permitido realizar este cambio.',
                    type: 'warning',
                    confirmButtonColor: '#213b78',
                });
                break;
            case 408:
                swal({
                    title: 'Su solicitud ha tardado mucho tiempo!',
                    text: 'Por favor verifique su Conexión a Internet y vuelva a intentarlo.',
                    type: 'warning',
                    confirmButtonColor: '#213b78',
                });
                break;
            default:
                this.error(error);
                BsNotify.error(defaultMgs);
                // console.error(error.json());
                break;
        }
    };
    return FormComponent;
}());
FormComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'ex-form',
                template: "<ex-card [icon]=\"icon\" [title]=\"title\"> <form class=\"form-horizontal\" novalidate (submit)=\"save()\" [formGroup]=\"form\"> <ng-content select=\"[top-form]\"></ng-content> <div class=\"row\"> <div *ngFor=\"let column of columns\" class=\"col-lg-{{12/columns.length}}\"> <div class=\"form-horizontal\"> <div *ngFor=\"let input of renderinputs\"> <div *ngIf=\"isRender(column, input.column, input.noitem)\" class=\"row\"> <label class=\"col-lg-3 label-on-left\" for=\"id_{{input.name}}\">{{input.title}}:</label> <div class=\"col-lg-9\"> <div class=\"form-group label-floating is-empty\" [class.has-error]=\"!!input.error\" [class.has-success]=\"!input.error\"> <label class=\"control-label\"></label> <input *ngIf=\"!input.isSelect && input.type !== 'checkbox'\" class=\"form-control {{input.class}}\" [attr.step]=\"input.step\" name=\"{{input.name}}\" [formControlName]=\"input.name\" [type]=\"input.type\" /> <md-select style=\"width:100%\" *ngIf=\"input.isSelect\" class=\"selectpicker\" id=\"id_{{input.name}}\" [formControlName]=\"input.name\" [title]=\"input.title\"> <md-option *ngFor=\"let option of input.options\" [value]=\"option.value\">{{option.title}}</md-option> </md-select> <span class=\"text-danger\">{{input.error}}</span> </div> <md-checkbox *ngIf=\"input.type === 'checkbox'\" [formControlName]=\"input.name\"></md-checkbox> <pre *ngIf=\"debug\">{{form.get(input.name).errors | json }}</pre> </div> </div> </div> </div> </div> </div> <ng-content select=\"[bottom-form]\"></ng-content> <div class=\"row\"> <div class=\"col-lg-6\"> <ng-content select=\"[custom-button]\"></ng-content> </div> <div class=\"col-lg-6 text-right\"> <button *ngIf=\"!item && saveable && otro\" class=\"btn btn-primary btn-responsive\" (click)=\"save(true)\" type=\"button\" [disabled]=\"!form.valid\">Guardar y Crear Otro</button> <input *ngIf=\"!item && saveable\" class=\"btn btn-primary btn-responsive\" [disabled]=\"!form.valid\" type=\"submit\" value=\"Guardar\" /> <button *ngIf=\"!!item && deleteable\" class=\"btn btn-warning btn-responsive\" (click)=\"delete()\" type=\"button\">Eliminar</button> <input *ngIf=\"!!item && saveable\" class=\"btn btn-primary btn-responsive\" type=\"submit\" value=\"Guardar Cambios\" [disabled]=\"!form.valid\" /> <button *ngIf=\"retur\" class=\"btn btn-primary btn-responsive\" (click)=\"back()\" type=\"button\">Regresar</button> </div> </div> </form> <div class=\"cargando\" *ngIf=\"_ready\"> <div class=\"loader\"> <svg class=\"circular\" viewBox=\"25 25 50 50\"> <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\"/> </svg> </div> </div> <pre *ngIf=\"debug\"> form valid: {{ form.valid }}</pre> <pre *ngIf=\"debug\"> form value: {{ form.value | json }}</pre> </ex-card> "
            },] },
];
/**
 * @nocollapse
 */
FormComponent.ctorParameters = function () { return [
    { type: _angular_router.ActivatedRoute, },
]; };
FormComponent.propDecorators = {
    'title': [{ type: _angular_core.Input },],
    'icon': [{ type: _angular_core.Input },],
    'columns': [{ type: _angular_core.Input },],
    'renderinputs': [{ type: _angular_core.Input },],
    'form': [{ type: _angular_core.Input },],
    'service': [{ type: _angular_core.Input },],
    'deleteable': [{ type: _angular_core.Input },],
    'saveable': [{ type: _angular_core.Input },],
    'otro': [{ type: _angular_core.Input },],
    'debug': [{ type: _angular_core.Input },],
    'retur': [{ type: _angular_core.Input },],
};

var TableComponent = (function () {
    /**
     * @param {?} _cs
     */
    function TableComponent(_cs) {
        var _this = this;
        this._cs = _cs;
        this.columns = [{ data: 'id' }];
        this.multiselect = false;
        this.deleteable = true;
        this.aggregable = true;
        this.editable = true;
        this.order = [[1, 'asc']];
        this.addlink = [0, 'edit'];
        this.enable = true;
        this.selectedItems = [];
        this.selectedItemsChange = new _angular_core.EventEmitter();
        this._editlink = function () {
            var /** @type {?} */ aux = _this.itemSelected;
            if (!!aux) {
                return [aux.id, 'edit'];
            }
            return [aux];
        };
    }
    /**
     * @param {?} data
     * @return {?}
     */
    TableComponent.renderCheckRow = function (data) {
        return "\n        <div class=\"checkbox\">\n            <label><input type=\"checkbox\" name=\"selectedItems\" value=\"" + data + "\"/></label>\n        </div>";
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TableComponent.renderDecimal = function (data) {
        return parseFloat(data).toFixed(2);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TableComponent.renderAvatar = function (data) {
        if (!data) {
            data = '/assets/img/default-avatar.png';
        }
        else {
            data = "" + window._server + data;
        }
        return "<div class=\"avatar\" style=\"background-image: url(" + data + ");\"></div>";
    };
    Object.defineProperty(TableComponent.prototype, "itemSelected", {
        /**
         * @return {?}
         */
        get: function () {
            return this.selectedItems[0] ? this.selectedItems[0] : null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TableComponent.prototype.ngOnInit = function () {
        var _this = this;
        var /** @type {?} */ table = this.table.nativeElement;
        var /** @type {?} */ conf = {
            processing: true,
            serverSide: true,
            pagingType: 'full_numbers',
            responsive: true,
            order: this.order,
            ajax: function (data, callback, settings) {
                var /** @type {?} */ op = {
                    page: Math.ceil(data.start / data.length) + 1,
                    num_page: data.length,
                    sort_property: _this.columns[data.order[0].column].data,
                    sort_direction: data.order[0].dir,
                    q: data.search.value
                };
                _this.ajax(data.draw, op, callback);
            },
            columns: this.columns,
            language: {
                sProcessing: "\n                    <div class=\"loader\">\n                        <svg class=\"circular\" viewBox=\"25 25 50 50\">\n                            <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\"/>\n                        </svg>\n                    </div>",
                sLengthMenu: 'Mostrar _MENU_ registros',
                sZeroRecords: 'No se encontraron resultados',
                sEmptyTable: 'Ningun dato disponible',
                sInfo: 'Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros',
                sInfoEmpty: 'Ningun dato disponible',
                sInfoFiltered: '(filtrado de un total de _MAX_ registros)',
                sInfoPostFix: '',
                sSearch: 'Buscar:',
                sUrl: '',
                sInfoThousands: ',',
                sLoadingRecords: 'Cargando...',
                oPaginate: {
                    sFirst: 'Primero',
                    sLast: 'Ultimo',
                    sNext: 'Siguiente',
                    sPrevious: 'Anterior'
                },
                oAria: {
                    sSortAscending: ': Activar para ordenar la columna de manera ascendente',
                    sSortDescending: ': Activar para ordenar la columna de manera descendente'
                }
            },
            drawCallback: function (settings) {
                _this.drawCallback();
                _this._selectionInit(table);
            }
        };
        if (this.enable) {
            this.dataTable = $(table).DataTable(conf);
        }
    };
    /**
     * @return {?}
     */
    TableComponent.prototype.drawCallback = function () { };
    /**
     * @param {?} table
     * @return {?}
     */
    TableComponent.prototype._selectionInit = function (table) {
        if (this.multiselect) {
            var /** @type {?} */ self_1 = this;
            $(table).find('tbody tr input[type=checkbox][name=selectedItems]').on('change', function (event) {
                self_1._onSelectedRow($(this).closest('tr')[0]);
            });
            $('#selectAll').on('change', function (event) {
                var /** @type {?} */ check = this.checked;
                $.each($(table).find('tbody tr input[type=checkbox][name=selectedItems]'), function (id, val) {
                    var /** @type {?} */ tr = $(val).closest('tr')[0];
                    if (check !== val.checked) {
                        $(val).prop({ checked: check });
                        self_1._onSelectedRow(tr);
                    }
                });
            });
        }
    };
    /**
     * @param {?} tr
     * @return {?}
     */
    TableComponent.prototype._onSelectedRow = function (tr) {
        var /** @type {?} */ self = this;
        var /** @type {?} */ table = this.table.nativeElement;
        $(tr).toggleClass('selected');
        this.selectedItems = [];
        $.each($(table).find('tr.selected'), function () {
            self.selectedItems.push(self.dataTable.row(this).data());
        });
        this.selectedItemsChange.emit({ selectedItems: this.selectedItems });
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TableComponent.prototype.preAjax = function (data) {
        return data;
    };
    /**
     * @param {?} draw
     * @param {?} dataSource
     * @param {?} cb
     * @return {?}
     */
    TableComponent.prototype.ajax = function (draw, dataSource, cb) {
        var _this = this;
        if (this.service) {
            dataSource = this.preAjax(dataSource);
            this.service.list(dataSource)
                .then(function (res) { return res.json(); })
                .then(function (data) {
                // console.log(data);
                _this.selectedItems = [];
                _this.selectedItemsChange.emit({ selectedItems: _this.selectedItems });
                _this.service.data = data.object_list;
                _this.success(_this.service.data);
                cb({ 'draw': draw, 'recordsTotal': data.count, 'recordsFiltered': data.count, 'data': data.object_list });
            })
                .catch(function (err) {
                // console.log(err);
                cb({ 'recordsTotal': 0, 'recordsFiltered': 0, 'data': [] });
                BsNotify.error('Ha ocurrido un error al consultar los datos');
            });
        }
        else {
            cb({ 'recordsTotal': 0, 'recordsFiltered': 0, 'data': [] });
            BsNotify.error('No has definido un servicio que consultar');
        }
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TableComponent.prototype.success = function (data) { };
    /**
     * @return {?}
     */
    TableComponent.prototype.onDelete = function () {
        var _this = this;
        if (this.deleteable) {
            swal({
                title: 'Estás seguro? ',
                text: "Se eliminar\u00E1n " + this.selectedItems.length + " registro(s).",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#213b78',
                cancelButtonColor: '#ff9800',
                cancelButtonText: 'Cancelar',
                confirmButtonText: 'Eliminar'
            }).then(function () {
                var /** @type {?} */ deletedList = [];
                for (var _i = 0, _a = _this.selectedItems; _i < _a.length; _i++) {
                    var item = _a[_i];
                    deletedList.push(_this.service.delete(item.id));
                }
                Promise.all(deletedList)
                    .then(function (data) {
                    _this.dataTable.ajax.reload();
                    swal({
                        title: 'Eliminado!',
                        text: 'Todos los registros se eliminaron con exito',
                        type: 'success',
                        confirmButtonColor: '#213b78',
                    });
                })
                    .catch(function (err) {
                    _this.dataTable.ajax.reload();
                    BsNotify.error('No se han podido eliminar los registros');
                    console.error(err);
                });
            }, function () { });
        }
    };
    Object.defineProperty(TableComponent.prototype, "editlink", {
        /**
         * @return {?}
         */
        get: function () {
            return this._editlink();
        },
        /**
         * @param {?} fn
         * @return {?}
         */
        set: function (fn) {
            this._editlink = fn;
        },
        enumerable: true,
        configurable: true
    });
    return TableComponent;
}());
TableComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'ex-table',
                template: "<ex-card [icon]=\"icon\"> <nav class=\"navbar navbar-default\" style=\"border-bottom:none;padding:0\"> <div class=\"container-fluid\"> <div class=\"navbar-header ex-responsive-header\"> <!-- <button type=\"button\" class=\"navbar-toggle\" *ngIf=\"aggregable || editable || deleteable\"> <span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </button> --> <h4 class=\"navbar-brand card-title\" style=\"margin:0;margin-top:-7px;margin-left:-10px;\">{{title}}</h4> </div> <!-- class=\"navbar-collapse collapse navbar-responsive-collapse\" --> <div class=\"navbar-right ex-responsive\" *ngIf=\"aggregable || editable || deleteable \"> <ul class=\"nav navbar-nav \"> <li *ngIf=\"selectedItems.length == 1 && editable\"> <button [routerLink]=\"editlink\" class=\"btn btn-primary btn-just-icon \"> <i class=\"material-icons\">create</i> <!-- <span class=\"hidden-lg hidden-md hidden-sm\">Editar</span> --> </button> </li> <li *ngIf=\"selectedItems.length >= 1 && deleteable\"> <button class=\"btn btn-primary btn-just-icon\" (click)=\"onDelete()\"> <i class=\"material-icons\">delete</i> <!-- <span class=\"hidden-lg hidden-md hidden-sm\">Eliminar</span> --> </button> </li> <li *ngIf=\"aggregable\"> <button [routerLink]=\"addlink\" class=\"btn btn-primary btn-just-icon\"> <i class=\"material-icons\">add</i> <!-- <span class=\"hidden-lg hidden-md hidden-sm\">Agregar</span> --> </button> </li> </ul> </div> <ng-content select=\"[buttons]\"></ng-content> </div> </nav> <div class=\"material-datatables\"> <table #table id=\"datatables\" class=\"table table-striped table-bordered table-responsive dt-responsive nowrap\" cellspacing=\"0\" width=\"100%\"> <thead> <tr> <th> <div class=\"checkbox\"> <label><input type=\"checkbox\" id=\"selectAll\"/></label> </div> </th> <ng-content></ng-content> </tr> </thead> </table> </div> <!-- <pre> selectedItems: {{selectedItems | json }}</pre> --> </ex-card> "
            },] },
];
/**
 * @nocollapse
 */
TableComponent.ctorParameters = function () { return [
    { type: CallService$1, },
]; };
TableComponent.propDecorators = {
    'table': [{ type: _angular_core.ViewChild, args: ['table',] },],
    'icon': [{ type: _angular_core.Input },],
    'title': [{ type: _angular_core.Input },],
    'service': [{ type: _angular_core.Input },],
    'columns': [{ type: _angular_core.Input },],
    'multiselect': [{ type: _angular_core.Input },],
    'deleteable': [{ type: _angular_core.Input },],
    'aggregable': [{ type: _angular_core.Input },],
    'editable': [{ type: _angular_core.Input },],
    'order': [{ type: _angular_core.Input },],
    'addlink': [{ type: _angular_core.Input },],
    'enable': [{ type: _angular_core.Input },],
    'selectedItemsChange': [{ type: _angular_core.Output },],
};

var P404Component = (function () {
    function P404Component() {
    }
    /**
     * @return {?}
     */
    P404Component.prototype.ngOnInit = function () {
    };
    return P404Component;
}());
P404Component.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'ex-404',
                template: "<h1>404</h1> "
            },] },
];
/**
 * @nocollapse
 */
P404Component.ctorParameters = function () { return []; };

var BaseComponent = (function () {
    function BaseComponent() {
    }
    return BaseComponent;
}());
BaseComponent.decorators = [
    { type: _angular_core.Component, args: [{ template: "<div class=\"wrapper\"> <ex-sidebar> <ex-navbar mobile=\"true\"></ex-navbar> </ex-sidebar> <div class=\"main-panel\"> <ex-toolbar title=\"Nomina\"> <ex-navbar right=\"true\"></ex-navbar> </ex-toolbar> <div class=\"main-content\"> <ex-miga></ex-miga> <router-outlet></router-outlet> </div> </div> </div> " },] },
];
/**
 * @nocollapse
 */
BaseComponent.ctorParameters = function () { return []; };

var SampleModule = (function () {
    function SampleModule() {
    }
    /**
     * @return {?}
     */
    SampleModule.forRoot = function () {
        return {
            ngModule: SampleModule,
            providers: [
                SampleService,
                CallService,
                CrudService
            ]
        };
    };
    return SampleModule;
}());
SampleModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [
                    _angular_common.CommonModule
                ],
                declarations: [
                    SampleComponent,
                    SampleDirective,
                    SamplePipe
                ],
                exports: [
                    SampleComponent,
                    SampleDirective,
                    SamplePipe
                ]
            },] },
];
/**
 * @nocollapse
 */
SampleModule.ctorParameters = function () { return []; };

exports.SampleModule = SampleModule;
exports.SampleComponent = SampleComponent;
exports.SampleDirective = SampleDirective;
exports.SamplePipe = SamplePipe;
exports.SampleService = SampleService;
exports.CallService = CallService;
exports.CrudBase = CrudBase;
exports.CrudService = CrudService;
exports.FormComponent = FormComponent;
exports.TableComponent = TableComponent;
exports.P404Component = P404Component;
exports.BaseComponent = BaseComponent;
exports.BsNotify = BsNotify;

Object.defineProperty(exports, '__esModule', { value: true });

})));
