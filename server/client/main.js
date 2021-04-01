(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/hi3":
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-service.service */ "9ELd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






function SigninComponent_small_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SigninComponent_small_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Invalid email format");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SigninComponent_small_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password must be at least 6 characters long.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SigninComponent_small_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SigninComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", error_r5.message, " ");
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
const _c1 = function () { return ["/signup"]; };
class SigninComponent {
    constructor(fb, provider) {
        this.fb = fb;
        this.provider = provider;
    }
    ngOnInit() {
        this.initializeForm();
    }
    initializeForm() {
        this.form = this.fb.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
        });
    }
    login() {
        this.provider.login(this.form.value);
    }
}
SigninComponent.ɵfac = function SigninComponent_Factory(t) { return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
SigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SigninComponent, selectors: [["app-signin"]], decls: 22, vars: 15, consts: [[1, "sign", 3, "formGroup", "ngSubmit"], [1, "text-center", "mb-5"], [1, "form-group"], ["for", "exampleInputEmail1"], ["type", "email", "formControlName", "email", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "Enter email", 1, "form-control", 3, "ngClass"], ["class", "error-message", 4, "ngIf"], ["for", "exampleInputPassword1"], ["type", "password", "formControlName", "password", "placeholder", "Password", 1, "form-control", 3, "ngClass"], ["type", "submit", 1, "btn", "btn-primary", "d-block", "m-auto", 3, "disabled"], [1, "lead", "d-block", "m-auto", "text-center", "mt-3"], ["routerLinkActive", "router-link-active", 3, "routerLink"], ["class", "alert alert-danger", "role", "alert", 4, "ngFor", "ngForOf"], [1, "error-message"], ["role", "alert", 1, "alert", "alert-danger"]], template: function SigninComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SigninComponent_Template_form_ngSubmit_0_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Signin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SigninComponent_small_7_Template, 2, 0, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SigninComponent_small_8_Template, 2, 0, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SigninComponent_small_13_Template, 2, 0, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, SigninComponent_small_14_Template, 2, 0, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Dont't have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, SigninComponent_div_21_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, ctx.form.get("email").invalid && ctx.form.get("email").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.get("email").hasError("required") && ctx.form.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.get("email").hasError("email") && ctx.form.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c0, ctx.form.get("password").invalid && ctx.form.get("password").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.get("password").hasError("minlength") && ctx.form.get("password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.get("password").hasError("required") && ctx.form.get("password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.form.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.provider.errors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduaW4uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\rajko\Desktop\PROJEKTI\ANGULAR\Angular_meme_app\client\src\main.ts */"zUnb");


/***/ }),

/***/ "1Dzb":
/*!********************************************************!*\
  !*** ./src/app/add-new-post/add-new-post.component.ts ***!
  \********************************************************/
/*! exports provided: AddNewPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewPostComponent", function() { return AddNewPostComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _posts_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../posts-service.service */ "pRW/");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-service.service */ "9ELd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_side_nav_content_side_nav_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/side-nav-content/side-nav-content.component */ "ubOP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");










function AddNewPostComponent_small_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Title is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddNewPostComponent_small_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please pick an image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddNewPostComponent_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddNewPostComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class AddNewPostComponent {
    constructor(fb, postsService, userService, router) {
        this.fb = fb;
        this.postsService = postsService;
        this.userService = userService;
        this.router = router;
        this.faThumbsUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faThumbsUp"];
        this.faThumbsDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faThumbsDown"];
        this.src = '../../assets/placeholder.jpg';
        this.submitting = false;
    }
    ngOnInit() {
        this.initializeForm();
    }
    initializeForm() {
        this.form = this.fb.group({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
        });
    }
    markAsTouched() {
        this.form.get('image').markAsTouched();
    }
    onFileChange(e) {
        let reader = new FileReader();
        const file = e.target.files[0];
        reader.readAsDataURL(file);
        this.form.patchValue({
            image: file,
        });
        reader.onload = () => {
            this.src = reader.result;
        };
    }
    submitForm(event) {
        if (!this.userService.user) {
            this.userService.setError('Please sign in first!');
            this.router.navigateByUrl('/signin');
            return;
        }
        event.preventDefault();
        this.submitting = true;
        let formData = new FormData();
        formData.append('title', this.form.get('title').value);
        formData.append('image', this.form.get('image').value);
        this.postsService.addNewPost(formData).subscribe((x) => {
            this.submitting = false;
            this.postsService.posts.unshift(x);
            this.router.navigateByUrl('/');
        }, (e) => {
            console.log(e);
        });
    }
}
AddNewPostComponent.ɵfac = function AddNewPostComponent_Factory(t) { return new (t || AddNewPostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_posts_service_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_user_service_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AddNewPostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddNewPostComponent, selectors: [["app-add-new-post"]], decls: 34, vars: 10, consts: [[1, "everything", "mt-0"], [1, "side", "mt-0"], [1, "lll", "mt-0"], [1, "experiment"], [1, "container"], [1, "text-center"], [1, "d-flex", "flex-column", "align-items-center", 3, "formGroup", "ngSubmit"], [1, "form-group", "w-100"], ["for", "exampleInputEmail1"], ["formControlName", "title", "type", "text", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "Title of your new meme", 1, "form-control"], ["class", "error-message", 4, "ngIf"], [1, "input-group", "mb-3"], [1, "custom-file", 3, "click"], ["type", "file", "id", "inputGroupFile01", 1, "custom-file-input", 3, "change"], ["for", "inputGroupFile01", 1, "custom-file-label"], ["class", "error-message mr-auto", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], ["class", "spinner-border text-dark", "role", "status", 4, "ngIf"], [1, "card", "mt-2"], [1, "card-title"], ["alt", "new post", 1, "card-img-top", 3, "src"], [1, "card-body", "d-flex", "justify-content-end"], [1, "btn", "btn-outline-dark", "d-flex", "align-items-center"], [3, "icon"], [1, "btn", "btn-outline-dark", "d-flex", "align-items-center", "ml-2"], [1, "error-message"], [1, "error-message", "mr-auto"], ["role", "status", 1, "spinner-border", "text-dark"], [1, "sr-only"]], template: function AddNewPostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-side-nav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Upload your meme");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AddNewPostComponent_Template_form_ngSubmit_8_listener($event) { return ctx.submitForm($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, AddNewPostComponent_small_13_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddNewPostComponent_Template_div_click_15_listener() { return ctx.markAsTouched(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AddNewPostComponent_Template_input_change_16_listener($event) { return ctx.onFileChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Choose file");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, AddNewPostComponent_small_19_Template, 2, 0, "small", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, AddNewPostComponent_span_21_Template, 2, 0, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, AddNewPostComponent_div_22_Template, 3, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " 0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "fa-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " 0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "fa-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.form.get("title").hasError("required") && ctx.form.get("title").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.form.get("image").hasError("required") && ctx.form.get("image").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.submitting);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitting);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.form.get("title").value || "The title of your meme", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faThumbsUp);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faThumbsDown);
    } }, directives: [_core_side_nav_content_side_nav_content_component__WEBPACK_IMPORTED_MODULE_6__["SideNavContentComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FaIconComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n  margin-top: 100px;\r\n  max-width: 600px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  box-shadow: 4px 4px 12px black;\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: auto;\r\n}\r\n\r\n@media screen and (min-width: 1000px) {\r\n  .main[_ngcontent-%COMP%] {\r\n    width: 33.33%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n  .main[_ngcontent-%COMP%] {\r\n    width: 100% !important;\r\n  }\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: auto;\r\n}\r\n\r\n@media screen and (min-width: 1000px) {\r\n  .main[_ngcontent-%COMP%] {\r\n    width: 33.33%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n  .main[_ngcontent-%COMP%] {\r\n    width: 100% !important;\r\n  }\r\n}\r\n\r\n\r\n\r\n.side[_ngcontent-%COMP%] {\r\n  width: 33.33%;\r\n}\r\n\r\n.lll[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  background-color: rgba(82, 82, 82, 0.377);\r\n\r\n  width: 230px;\r\n  height: 100vh;\r\n  box-shadow: 10px 0 5px -2px #888;\r\n}\r\n\r\n.experiment[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  z-index: -1000;\r\n  background: url('vT04jS.png');\r\n  opacity: 0.2;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n}\r\n\r\n@media screen and (min-width: 1000px) {\r\n  .main[_ngcontent-%COMP%] {\r\n    width: 33.33%;\r\n  }\r\n  .lll[_ngcontent-%COMP%] {\r\n    width: 180px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1150px) {\r\n  .lll[_ngcontent-%COMP%] {\r\n    width: 260px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1400px) {\r\n  .lll[_ngcontent-%COMP%] {\r\n    width: 400px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n  .main[_ngcontent-%COMP%] {\r\n    width: 100% !important;\r\n  }\r\n  .side[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\r\n\r\n.show[_ngcontent-%COMP%] {\r\n  transform: translateX(0%);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1uZXctcG9zdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7RUFDeEI7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7RUFDeEI7QUFDRjs7QUFDQSxhQUFhOztBQUViO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTix5Q0FBeUM7O0VBRXpDLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCw2QkFBMEM7RUFDMUMsWUFBWTtFQUNaLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7QUFDWDs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6ImFkZC1uZXctcG9zdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJveC1zaGFkb3c6IDRweCA0cHggMTJweCBibGFjaztcclxufVxyXG5cclxuLm1haW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XHJcbiAgLm1haW4ge1xyXG4gICAgd2lkdGg6IDMzLjMzJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gIC5tYWluIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcclxuICAubWFpbiB7XHJcbiAgICB3aWR0aDogMzMuMzMlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgLm1haW4ge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuLyogYXNkZmFzZmQgKi9cclxuXHJcbi5zaWRlIHtcclxuICB3aWR0aDogMzMuMzMlO1xyXG59XHJcblxyXG4ubGxsIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODIsIDgyLCA4MiwgMC4zNzcpO1xyXG5cclxuICB3aWR0aDogMjMwcHg7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBib3gtc2hhZG93OiAxMHB4IDAgNXB4IC0ycHggIzg4ODtcclxufVxyXG5cclxuLmV4cGVyaW1lbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAtMTAwMDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvdlQwNGpTLnBuZ1wiKTtcclxuICBvcGFjaXR5OiAwLjI7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcclxuICAubWFpbiB7XHJcbiAgICB3aWR0aDogMzMuMzMlO1xyXG4gIH1cclxuICAubGxsIHtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExNTBweCkge1xyXG4gIC5sbGwge1xyXG4gICAgd2lkdGg6IDI2MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQwMHB4KSB7XHJcbiAgLmxsbCB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAubWFpbiB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuc2lkZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLnNob3cge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "8WXK":
/*!************************************************!*\
  !*** ./src/app/my-memes/my-memes.component.ts ***!
  \************************************************/
/*! exports provided: MyMemesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyMemesComponent", function() { return MyMemesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _posts_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../posts-service.service */ "pRW/");
/* harmony import */ var _core_side_nav_content_side_nav_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/side-nav-content/side-nav-content.component */ "ubOP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _single_post_single_post_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../single-post/single-post.component */ "KchH");





function MyMemesComponent_app_single_post_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-single-post", 6);
} if (rf & 2) {
    const post_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", post_r1);
} }
class MyMemesComponent {
    constructor(postsProvider) {
        this.postsProvider = postsProvider;
    }
    ngOnInit() {
        this.getMyPosts();
    }
    getMyPosts() {
        this.postsProvider.getMyPosts();
    }
}
MyMemesComponent.ɵfac = function MyMemesComponent_Factory(t) { return new (t || MyMemesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_posts_service_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"])); };
MyMemesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyMemesComponent, selectors: [["app-my-memes"]], decls: 7, vars: 1, consts: [[1, "everything", "mt-0"], [1, "side", "mt-0"], [1, "lll", "mt-0"], [1, "experiment"], [1, "main", "mt-4"], [3, "post", 4, "ngFor", "ngForOf"], [3, "post"]], template: function MyMemesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-side-nav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MyMemesComponent_app_single_post_6_Template, 1, 1, "app-single-post", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.postsProvider.myPosts);
    } }, directives: [_core_side_nav_content_side_nav_content_component__WEBPACK_IMPORTED_MODULE_2__["SideNavContentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _single_post_single_post_component__WEBPACK_IMPORTED_MODULE_4__["SinglePostComponent"]], styles: [".main[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: auto;\r\n}\r\n\r\n@media screen and (min-width: 1000px) {\r\n  .main[_ngcontent-%COMP%] {\r\n    width: 33.33%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n  .main[_ngcontent-%COMP%] {\r\n    width: 100% !important;\r\n  }\r\n}\r\n\r\n\r\n\r\n.side[_ngcontent-%COMP%] {\r\n  width: 33.33%;\r\n}\r\n\r\n.lll[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  background-color: rgba(82, 82, 82, 0.377);\r\n\r\n  width: 230px;\r\n  height: 100vh;\r\n  box-shadow: 10px 0 5px -2px #888;\r\n}\r\n\r\n.experiment[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  z-index: -1000;\r\n  background: url('vT04jS.png');\r\n  opacity: 0.2;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n}\r\n\r\n@media screen and (min-width: 1000px) {\r\n  .main[_ngcontent-%COMP%] {\r\n    width: 33.33%;\r\n  }\r\n  .lll[_ngcontent-%COMP%] {\r\n    width: 180px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1150px) {\r\n  .lll[_ngcontent-%COMP%] {\r\n    width: 260px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1400px) {\r\n  .lll[_ngcontent-%COMP%] {\r\n    width: 400px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n  .main[_ngcontent-%COMP%] {\r\n    width: 100% !important;\r\n  }\r\n  .side[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\r\n\r\n.show[_ngcontent-%COMP%] {\r\n  transform: translateX(0%);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LW1lbWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCO0FBQ0Y7O0FBQ0EsYUFBYTs7QUFFYjtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04seUNBQXlDOztFQUV6QyxZQUFZO0VBQ1osYUFBYTtFQUNiLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsNkJBQTBDO0VBQzFDLFlBQVk7RUFDWixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0FBQ1g7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJteS1tZW1lcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XHJcbiAgLm1haW4ge1xyXG4gICAgd2lkdGg6IDMzLjMzJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gIC5tYWluIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi8qIGFzZGZhc2ZkICovXHJcblxyXG4uc2lkZSB7XHJcbiAgd2lkdGg6IDMzLjMzJTtcclxufVxyXG5cclxuLmxsbCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgyLCA4MiwgODIsIDAuMzc3KTtcclxuXHJcbiAgd2lkdGg6IDIzMHB4O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYm94LXNoYWRvdzogMTBweCAwIDVweCAtMnB4ICM4ODg7XHJcbn1cclxuXHJcbi5leHBlcmltZW50IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogLTEwMDA7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL3ZUMDRqUy5wbmdcIik7XHJcbiAgb3BhY2l0eTogMC4yO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XHJcbiAgLm1haW4ge1xyXG4gICAgd2lkdGg6IDMzLjMzJTtcclxuICB9XHJcbiAgLmxsbCB7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTUwcHgpIHtcclxuICAubGxsIHtcclxuICAgIHdpZHRoOiAyNjBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0MDBweCkge1xyXG4gIC5sbGwge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgLm1haW4ge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnNpZGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5zaG93IHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "9ELd":
/*!*****************************************!*\
  !*** ./src/app/user-service.service.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class UserService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.url = 'https://rajko-meme-app.herokuapp.com/api/auth/';
        this.user = null;
        this.token = null;
        this.errors = [];
    }
    register(credentials) {
        this.http
            .post(this.url + 'register', credentials)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((x) => {
            return x;
        }))
            .subscribe((x) => {
            this.token = x.data.token;
            localStorage.setItem('token', x.data.token);
            this.router.navigateByUrl('/');
            this.getUser();
        }, (e) => {
            this.setError(e.error.msg);
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        });
    }
    login(credentials) {
        return this.http
            .post(this.url + 'login', credentials)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((x) => {
            return x.data.token;
        }))
            .subscribe((x) => {
            this.token = x;
            localStorage.setItem('token', this.token);
            this.getUser();
            this.router.navigateByUrl('/');
        }, (e) => {
            console.log(e.error.msg);
            this.setError(e.error.msg);
            console.log(this.errors);
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        });
    }
    setError(message) {
        let id = Date.now();
        this.errors.push({ id, message });
        let t = setTimeout(() => {
            this.errors.length = 0;
            clearTimeout(t);
        }, 3000);
    }
    getUser() {
        this.http
            .get(this.url + 'user')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((x) => {
            return x;
        }))
            .subscribe((x) => {
            this.user = x.data.user;
            localStorage.setItem('user', JSON.stringify(this.user));
        }, (e) => {
            console.log(e);
            localStorage.removeItem('user');
            localStorage.removeItem('token');
        });
    }
    logout() {
        (this.user = null), (this.token = null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _posts_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../posts-service.service */ "pRW/");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-service.service */ "9ELd");
/* harmony import */ var _core_side_nav_content_side_nav_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/side-nav-content/side-nav-content.component */ "ubOP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _single_post_single_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../single-post/single-post.component */ "KchH");






function HomeComponent_app_single_post_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-single-post", 8);
} if (rf & 2) {
    const post_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", post_r3);
} }
function HomeComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No more content ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomeComponent {
    /*  posts: Post[]; */
    constructor(provider, userProvider) {
        this.provider = provider;
        this.userProvider = userProvider;
        this.scrollFunc = () => {
            let height = document.documentElement.scrollHeight;
            let scrolled = window.pageYOffset + window.innerHeight;
            if (height - 100 < scrolled &&
                !this.provider.loadingPosts &&
                !this.provider.noContent) {
                this.getPosts();
            }
        };
    }
    ngOnInit() {
        this.infiniteScrolling();
        /*    if (document.documentElement.scrollHeight.toString()) {
          this.getPosts();
        } */
    }
    getPosts() {
        this.provider.getPosts();
    }
    infiniteScrolling() {
        document.addEventListener('scroll', this.scrollFunc);
    }
    ngOnDestroy() {
        document.removeEventListener('scroll', this.scrollFunc);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_posts_service_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 10, vars: 3, consts: [[1, "d-flex", "justify-content-center"], [1, "side"], [1, "lll"], [1, "experiment"], [1, "main", "mt-5"], ["class", "d-flex justify-content-center", 3, "post", 4, "ngFor", "ngForOf"], ["class", "spinner-border spinner text-primary", "role", "status", 4, "ngIf"], ["class", "alert alert-primary mt-5 d-flex justify-content-center align-items-center", "role", "alert", 4, "ngIf"], [1, "d-flex", "justify-content-center", 3, "post"], ["role", "status", 1, "spinner-border", "spinner", "text-primary"], [1, "sr-only"], ["role", "alert", 1, "alert", "alert-primary", "mt-5", "d-flex", "justify-content-center", "align-items-center"], ["width", "100px", "src", "../../assets/nocontent.png", "alt", "no content", 1, "ml-1"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-side-nav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_app_single_post_6_Template, 1, 1, "app-single-post", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_div_7_Template, 3, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeComponent_div_8_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.provider.posts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.provider.loadingPosts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.provider.noContent);
    } }, directives: [_core_side_nav_content_side_nav_content_component__WEBPACK_IMPORTED_MODULE_3__["SideNavContentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _single_post_single_post_component__WEBPACK_IMPORTED_MODULE_5__["SinglePostComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n  margin-top: 70px;\r\n}\r\n.side[_ngcontent-%COMP%] {\r\n  width: 33.33%;\r\n}\r\n.lll[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  background-color: rgba(82, 82, 82, 0.377);\r\n\r\n  width: 230px;\r\n  height: 100vh;\r\n  box-shadow: 10px 0 5px -2px #888;\r\n}\r\n.experiment[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  z-index: -1000;\r\n  background: url('vT04jS.png');\r\n  opacity: 0.2;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n}\r\n.spinner[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-top: 400px;\r\n  width: 200px;\r\n  height: 200px;\r\n}\r\n@media screen and (min-width: 1000px) {\r\n  .main[_ngcontent-%COMP%] {\r\n    width: 33.33%;\r\n  }\r\n  .lll[_ngcontent-%COMP%] {\r\n    width: 180px;\r\n  }\r\n}\r\n@media screen and (min-width: 1150px) {\r\n  .lll[_ngcontent-%COMP%] {\r\n    width: 260px;\r\n  }\r\n}\r\n@media screen and (min-width: 1400px) {\r\n  .lll[_ngcontent-%COMP%] {\r\n    width: 400px;\r\n  }\r\n}\r\n@media screen and (max-width: 1000px) {\r\n  .main[_ngcontent-%COMP%] {\r\n    width: 100% !important;\r\n  }\r\n  .side[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\r\n.show[_ngcontent-%COMP%] {\r\n  transform: translateX(0%);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxlQUFlO0VBQ2YseUNBQXlDOztFQUV6QyxZQUFZO0VBQ1osYUFBYTtFQUNiLGdDQUFnQztBQUNsQztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCw2QkFBMEM7RUFDMUMsWUFBWTtFQUNaLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7QUFDWDtBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7QUFDRjtBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRjtBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRjtBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLGFBQWE7RUFDZjtBQUNGO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogNzBweDtcclxufVxyXG4uc2lkZSB7XHJcbiAgd2lkdGg6IDMzLjMzJTtcclxufVxyXG5cclxuLmxsbCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODIsIDgyLCA4MiwgMC4zNzcpO1xyXG5cclxuICB3aWR0aDogMjMwcHg7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBib3gtc2hhZG93OiAxMHB4IDAgNXB4IC0ycHggIzg4ODtcclxufVxyXG5cclxuLmV4cGVyaW1lbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAtMTAwMDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvdlQwNGpTLnBuZ1wiKTtcclxuICBvcGFjaXR5OiAwLjI7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG59XHJcblxyXG4uc3Bpbm5lciB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogNDAwcHg7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xyXG4gIC5tYWluIHtcclxuICAgIHdpZHRoOiAzMy4zMyU7XHJcbiAgfVxyXG4gIC5sbGwge1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTE1MHB4KSB7XHJcbiAgLmxsbCB7XHJcbiAgICB3aWR0aDogMjYwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDAwcHgpIHtcclxuICAubGxsIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gIC5tYWluIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5zaWRlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4uc2hvdyB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "AYdr":
/*!********************************************************!*\
  !*** ./src/app/post-comment/post-comment.component.ts ***!
  \********************************************************/
/*! exports provided: PostCommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCommentComponent", function() { return PostCommentComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _comments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comments.service */ "matb");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-service.service */ "9ELd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");







class PostCommentComponent {
    constructor(commentsProvider, userService, router) {
        this.commentsProvider = commentsProvider;
        this.userService = userService;
        this.router = router;
        this.faPaperPlane = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faPaperPlane"];
    }
    ngOnInit() { }
    kurcina() {
        console.log(this.body);
    }
    postComment() {
        var _a;
        if (!this.userService.user) {
            this.userService.setError('Please sign in first!');
            this.router.navigateByUrl('/signin');
            return;
        }
        this.commentsProvider.postComment(this.body, this.postId, (_a = this.comment) === null || _a === void 0 ? void 0 : _a.comment_id);
        this.body = '';
    }
}
PostCommentComponent.ɵfac = function PostCommentComponent_Factory(t) { return new (t || PostCommentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_comments_service__WEBPACK_IMPORTED_MODULE_2__["CommentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
PostCommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PostCommentComponent, selectors: [["app-post-comment"]], inputs: { postId: "postId", comment: "comment" }, decls: 7, vars: 2, consts: [[1, "container-fluid", "p-0", "w-90"], [1, "input-group", "mb-3", 3, "ngSubmit"], ["form", "ngForm"], ["placeholder", "Post comment", "type", "text", "name", "body", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], ["id", "button-addon2", 1, "btn", "btn-primary"], [3, "icon"]], template: function PostCommentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function PostCommentComponent_Template_form_ngSubmit_1_listener() { return ctx.postComment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PostCommentComponent_Template_input_ngModelChange_3_listener($event) { return ctx.body = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.body);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faPaperPlane);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0LWNvbW1lbnQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "AuWd":
/*!****************************************************************************!*\
  !*** ./src/app/single-comment-preview/single-comment-preview.component.ts ***!
  \****************************************************************************/
/*! exports provided: SingleCommentPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleCommentPreviewComponent", function() { return SingleCommentPreviewComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _comments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../comments.service */ "matb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _single_comment_single_comment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../single-comment/single-comment.component */ "miHx");






function SingleCommentPreviewComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SingleCommentPreviewComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SingleCommentPreviewComponent_div_2_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " go back .");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.error, " ");
} }
function SingleCommentPreviewComponent_app_single_comment_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-single-comment", 10);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("comment", ctx_r2.comment)("partOfPreviewComponent", true);
} }
function SingleCommentPreviewComponent_h4_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Replies ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SingleCommentPreviewComponent_app_single_comment_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-single-comment", 12);
} if (rf & 2) {
    const comment_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("comment", comment_r7);
} }
class SingleCommentPreviewComponent {
    constructor(route, commentsService, router, location) {
        this.route = route;
        this.commentsService = commentsService;
        this.router = router;
        this.location = location;
        this.loadingComment = true;
    }
    ngOnInit() {
        this.getPostId();
    }
    getPostId() {
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((p) => p.id)).subscribe((x) => {
            this.comment_id = x;
            this.loadingComment = true;
            this.getSingleComment();
        });
    }
    getSingleComment() {
        this.commentsService.getSingleComment(this.comment_id).subscribe((x) => {
            this.comment = x;
            this.commentsService.getAllComments(this.comment.post_id);
            this.commentsService.getSubcomments(this.comment.comment_id);
            this.loadingComment = false;
            this.commentsService.singleCommentExists = true;
        }, (e) => {
            this.loadingComment = false;
            this.error = e.error.msg;
        });
    }
    goBack() {
        this.location.back();
    }
}
SingleCommentPreviewComponent.ɵfac = function SingleCommentPreviewComponent_Factory(t) { return new (t || SingleCommentPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_comments_service__WEBPACK_IMPORTED_MODULE_3__["CommentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"])); };
SingleCommentPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SingleCommentPreviewComponent, selectors: [["app-single-comment-preview"]], decls: 6, vars: 5, consts: [[1, "container-fluid", "d-flex", "flex-column", "align-content-center"], ["style", "width: 100px; height: 100px", "class", "spinner-border text-primary", "role", "status", 4, "ngIf"], ["class", "alert alert-warning", "role", "alert", 4, "ngIf"], [3, "comment", "partOfPreviewComponent", 4, "ngIf"], ["class", "text-center m-2", 4, "ngIf"], ["class", "mt-2", 3, "comment", 4, "ngFor", "ngForOf"], ["role", "status", 1, "spinner-border", "text-primary", 2, "width", "100px", "height", "100px"], [1, "sr-only"], ["role", "alert", 1, "alert", "alert-warning"], [1, "alert-link", 3, "click"], [3, "comment", "partOfPreviewComponent"], [1, "text-center", "m-2"], [1, "mt-2", 3, "comment"]], template: function SingleCommentPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SingleCommentPreviewComponent_div_1_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SingleCommentPreviewComponent_div_2_Template, 4, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SingleCommentPreviewComponent_app_single_comment_3_Template, 1, 2, "app-single-comment", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SingleCommentPreviewComponent_h4_4_Template, 2, 0, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SingleCommentPreviewComponent_app_single_comment_5_Template, 1, 1, "app-single-comment", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loadingComment);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.comment && ctx.commentsService.singleCommentExists);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.commentsService.subcomments.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.commentsService.subcomments);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _single_comment_single_comment_component__WEBPACK_IMPORTED_MODULE_5__["SingleCommentComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaW5nbGUtY29tbWVudC1wcmV2aWV3LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DLJC":
/*!***************************************************************!*\
  !*** ./src/app/core/scroll-to-top/scroll-to-top.component.ts ***!
  \***************************************************************/
/*! exports provided: ScrollToTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollToTopComponent", function() { return ScrollToTopComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");



class ScrollToTopComponent {
    constructor() {
        this.faArrowUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faArrowUp"];
    }
    ngOnInit() { }
    scroll() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}
ScrollToTopComponent.ɵfac = function ScrollToTopComponent_Factory(t) { return new (t || ScrollToTopComponent)(); };
ScrollToTopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ScrollToTopComponent, selectors: [["app-scroll-to-top"]], decls: 2, vars: 1, consts: [[1, "scroll", "rounded-circle", 3, "click"], [1, "close-search", 3, "icon"]], template: function ScrollToTopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScrollToTopComponent_Template_div_click_0_listener() { return ctx.scroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faArrowUp);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"]], styles: [".scroll[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  padding: 1rem;\r\n  z-index: 100;\r\n  bottom: 1rem;\r\n  right: 1rem;\r\n  color: white;\r\n  background-color: black;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n.scroll[_ngcontent-%COMP%]:hover {\r\n  color: black;\r\n  background-color: rgb(187, 183, 183);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcm9sbC10by10b3AuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtFQUN2Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osb0NBQW9DO0FBQ3RDIiwiZmlsZSI6InNjcm9sbC10by10b3AuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGwge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBib3R0b206IDFyZW07XHJcbiAgcmlnaHQ6IDFyZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5zY3JvbGw6aG92ZXIge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg3LCAxODMsIDE4Myk7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "HVhy":
/*!******************************************!*\
  !*** ./src/app/models/GetPostsServer.ts ***!
  \******************************************/
/*! exports provided: GetPostsServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPostsServer", function() { return GetPostsServer; });
class GetPostsServer {
    constructor(obj) {
        this.data = (obj && obj.data) || null;
    }
}


/***/ }),

/***/ "KchH":
/*!******************************************************!*\
  !*** ./src/app/single-post/single-post.component.ts ***!
  \******************************************************/
/*! exports provided: SinglePostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglePostComponent", function() { return SinglePostComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-service.service */ "9ELd");
/* harmony import */ var _posts_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../posts-service.service */ "pRW/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");







function SinglePostComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SinglePostComponent_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.deletePost(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r0.faTrashAlt);
} }
const _c0 = function (a1) { return ["/post", a1]; };
const _c1 = function (a0) { return { "text-success": a0 }; };
const _c2 = function (a0) { return { "text-danger": a0 }; };
class SinglePostComponent {
    constructor(userService, postsService, router) {
        this.userService = userService;
        this.postsService = postsService;
        this.router = router;
        this.faThumbsUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faThumbsUp"];
        this.faThumbsDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faThumbsDown"];
        this.faComment = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faComment"];
        this.faTrashAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faTrashAlt"];
    }
    ngOnInit() {
        this.currentRoute = this.router.url;
        if (this.userService.user) {
            this.checkLikeDislike(this.post.post_id);
        }
    }
    likeDislike(action) {
        if (!this.userService.user) {
            this.userService.setError('Please sign in first!');
            this.router.navigateByUrl('/signin');
            return;
        }
        this.postsService.likeDislikePost(this.post.post_id, action).subscribe((x) => {
            if (this.liked == 2 && action) {
                this.post.likes++;
            }
            if (this.liked == 2 && !action) {
                this.post.dislikes++;
            }
            if (this.liked == 1 && action) {
                this.post.likes--;
            }
            if (this.liked == 0 && !action) {
                this.post.dislikes--;
            }
            if (this.liked == 0 && action) {
                this.post.likes++;
                this.post.dislikes--;
            }
            if (this.liked == 1 && !action) {
                this.post.likes--;
                this.post.dislikes++;
            }
            this.liked = x;
        }, (e) => {
            console.log(e);
        });
    }
    checkLikeDislike(id) {
        return this.postsService.checkLikeDislike(id).subscribe((x) => {
            this.liked = x;
        }, (e) => {
            console.log(e);
        });
    }
    deletePost() {
        this.postsService.deletePost(this.post.post_id).subscribe((x) => {
            let indexInMyPosts = this.postsService.myPosts.findIndex((p) => p.post_id == this.post.post_id);
            let indexInAllPosts = this.postsService.posts.findIndex((p) => p.post_id == this.post.post_id);
            this.postsService.myPosts.splice(indexInMyPosts, 1);
            this.postsService.posts.splice(indexInAllPosts, 1);
        }, (e) => {
            console.log(e);
        });
    }
}
SinglePostComponent.ɵfac = function SinglePostComponent_Factory(t) { return new (t || SinglePostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_posts_service_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
SinglePostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SinglePostComponent, selectors: [["app-single-post"]], inputs: { post: "post" }, decls: 26, vars: 33, consts: [[1, "card", "mt-5"], [3, "routerLink"], [1, "card-title"], [1, "card-img-top", 3, "src", "alt"], [1, "card-body", "d-flex", "justify-content-between"], [1, "post-data"], [1, "post_author"], [1, "post_date"], [1, "post_buttons", "d-flex"], ["class", "btn btn-outline-dark d-flex align-items-center text-danger ml-2", 3, "click", 4, "ngIf"], [1, "btn", "btn-outline-dark", "d-flex", "align-items-center", "ml-2", 3, "routerLink"], [3, "icon"], [1, "btn", "btn-outline-dark", "d-flex", "align-items-center", "ml-2", 3, "click"], [3, "ngClass", "icon"], [1, "btn", "btn-outline-dark", "d-flex", "align-items-center", "text-danger", "ml-2", 3, "click"]], template: function SinglePostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, SinglePostComponent_button_16_Template, 2, 1, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "fa-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SinglePostComponent_Template_button_click_20_listener() { return ctx.likeDislike(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "fa-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SinglePostComponent_Template_button_click_23_listener() { return ctx.likeDislike(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "fa-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](23, _c0, ctx.post.post_id));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 17, ctx.post == null ? null : ctx.post.title));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](25, _c0, ctx.post.post_id));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.post == null ? null : ctx.post.image_public_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx.post == null ? null : ctx.post.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Created by : ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 19, ctx.post.author), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Date : ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 21, ctx.post.created_at), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.post == null ? null : ctx.post.user_id) == (ctx.userService.user == null ? null : ctx.userService.user.user_id) && ctx.currentRoute == "/mymemes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](27, _c0, ctx.post.post_id));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.post == null ? null : ctx.post.comments, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faComment);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.post == null ? null : ctx.post.likes, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](29, _c1, ctx.liked == 1))("icon", ctx.faThumbsUp);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.post == null ? null : ctx.post.dislikes, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](31, _c2, ctx.liked == 0))("icon", ctx.faThumbsDown);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".card[_ngcontent-%COMP%] {\r\n  max-width: 50%;\r\n  box-shadow: 4px 4px 10px black;\r\n  justify-content: center;\r\n  margin: auto;\r\n}\r\n\r\nh5[_ngcontent-%COMP%] {\r\n  color: black;\r\n  padding: 0rem 0.5rem;\r\n}\r\n\r\n@media screen and (min-width: 600px) {\r\n  .card[_ngcontent-%COMP%] {\r\n    min-width: 600px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .card[_ngcontent-%COMP%] {\r\n    min-width: 90% !important;\r\n  }\r\n  .post-data[_ngcontent-%COMP%] {\r\n    font-style: italic;\r\n    font-size: 0.7rem;\r\n  }\r\n\r\n  .post_buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    padding: 0.2rem !important;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbmdsZS1wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsOEJBQThCO0VBQzlCLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0YiLCJmaWxlIjoic2luZ2xlLXBvc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICBtYXgtd2lkdGg6IDUwJTtcclxuICBib3gtc2hhZG93OiA0cHggNHB4IDEwcHggYmxhY2s7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5oNSB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDByZW0gMC41cmVtO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XHJcbiAgLmNhcmQge1xyXG4gICAgbWluLXdpZHRoOiA2MDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLmNhcmQge1xyXG4gICAgbWluLXdpZHRoOiA5MCUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnBvc3QtZGF0YSB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICB9XHJcblxyXG4gIC5wb3N0X2J1dHRvbnMgYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDAuMnJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "LjNy":
/*!*****************************************************!*\
  !*** ./src/app/core/side-nav/side-nav.component.ts ***!
  \*****************************************************/
/*! exports provided: SideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return SideNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var src_app_user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/user-service.service */ "9ELd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _side_nav_content_side_nav_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../side-nav-content/side-nav-content.component */ "ubOP");






const _c0 = function (a0) { return { show: a0 }; };
class SideNavComponent {
    constructor(userProvider) {
        this.userProvider = userProvider;
        this.faHeart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHeart"];
        this.faUserAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUserAlt"];
        this.faSignOutAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSignOutAlt"];
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlus"];
        this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    close() {
        this.closeEvent.emit(false);
    }
}
SideNavComponent.ɵfac = function SideNavComponent_Factory(t) { return new (t || SideNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
SideNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideNavComponent, selectors: [["app-side-nav"]], inputs: { showing: "showing" }, outputs: { closeEvent: "closeEvent" }, decls: 4, vars: 3, consts: [[1, "side-nav", 3, "ngClass", "click"], [1, "content"], [1, "experiment"]], template: function SideNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavComponent_Template_div_click_0_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-side-nav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.showing));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _side_nav_content_side_nav_content_component__WEBPACK_IMPORTED_MODULE_4__["SideNavContentComponent"]], styles: [".side-nav[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background-color: rgba(0, 0, 0, 0.438);\r\n  transform: translateX(100%);\r\n  position: fixed;\r\n  top: 0;\r\n  z-index: 100;\r\n  height: 100%;\r\n  transition: all 1s ease;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  background-color: rgba(131, 139, 153, 0.5);\r\n  position: fixed;\r\n  height: 100%;\r\n  width: 250px;\r\n}\r\n\r\n.show[_ngcontent-%COMP%] {\r\n  transform: translateX(0%);\r\n}\r\n\r\n.experiment[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  z-index: -1000;\r\n  background: url('vT04jS.png');\r\n  opacity: 0.05;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGUtbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsc0NBQXNDO0VBQ3RDLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsTUFBTTtFQUNOLFlBQVk7RUFDWixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCw2QkFBNkM7RUFDN0MsYUFBYTtFQUNiLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7QUFDWCIsImZpbGUiOiJzaWRlLW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGUtbmF2IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDM4KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzEsIDEzOSwgMTUzLCAwLjUpO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG4uc2hvdyB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxufVxyXG5cclxuLmV4cGVyaW1lbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAtMTAwMDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvdlQwNGpTLnBuZ1wiKTtcclxuICBvcGFjaXR5OiAwLjA1O1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "OF70":
/*!********************************!*\
  !*** ./src/app/models/Post.ts ***!
  \********************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
class Post {
    constructor(obj) {
        this.post_id = (obj && obj.post_id) || null;
        this.title = (obj && obj.title) || null;
        this.image_public_url = (obj && obj.image_public_url) || null;
        this.likes = (obj && obj.likes) || 0;
        this.dislikes = (obj && obj.dislikes) || 0;
        this.comments = (obj && obj.comments) || 0;
        this.user_id = (obj && obj.user_id) || null;
        this.author = (obj && obj.author) || null;
        this.created_at = (obj && obj.created_at) || null;
    }
}


/***/ }),

/***/ "R2Se":
/*!*************************************************!*\
  !*** ./src/app/core/navbar/navbar.component.ts ***!
  \*************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_user_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/user-service.service */ "9ELd");
/* harmony import */ var src_app_posts_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/posts-service.service */ "pRW/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");










const _c0 = ["myDiv"];
function NavbarComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function NavbarComponent_div_6_Template_input_keyup_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.search($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_6_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.toggleSearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "fa-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.postsProvider.like);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faWindowClose);
} }
function NavbarComponent_fa_icon_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fa-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_fa_icon_8_Template_fa_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.toggleSearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r1.faSearch);
} }
const _c1 = function () { return ["/signup"]; };
function NavbarComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Register ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "fa-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r2.faUserPlus);
} }
const _c2 = function () { return ["/signin"]; };
function NavbarComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "fa-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r3.faSignInAlt);
} }
const _c3 = function () { return ["/"]; };
class NavbarComponent {
    constructor(provider, router, postsProvider) {
        this.provider = provider;
        this.router = router;
        this.postsProvider = postsProvider;
        this.faHamburger = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHamburger"];
        this.faSignOutAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSignOutAlt"];
        this.faUserPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUserPlus"];
        this.faSignInAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSignInAlt"];
        this.faWindowClose = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faWindowClose"];
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSearch"];
        this.showSearch = false;
        this.showHideSideNav = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]))
            .subscribe((event) => {
            this.currentRoute = event.url;
        });
    }
    toggleSideNav() {
        this.showHideSideNav.emit(!this.sideNavShowing);
    }
    toggleSearch() {
        if (this.showSearch && this.postsProvider.like) {
            this.postsProvider.like = '';
            this.postsProvider.page = 1;
            this.postsProvider.posts.length = 0;
            this.postsProvider.getPosts();
        }
        this.showSearch = !this.showSearch;
        if (this.showSearch) {
            let t = setTimeout(() => {
                this.divView.nativeElement.focus();
                clearTimeout(t);
            }, 50);
        }
    }
    search(e) {
        this.postsProvider.like = e.target.value;
        this.postsProvider.page = 1;
        this.postsProvider.posts.length = 0;
        this.postsProvider.getPosts();
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_user_service_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_posts_service_service__WEBPACK_IMPORTED_MODULE_5__["PostsService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], viewQuery: function NavbarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.divView = _t.first);
    } }, inputs: { sideNavShowing: "sideNavShowing" }, outputs: { showHideSideNav: "showHideSideNav" }, decls: 14, vars: 7, consts: [[1, "navbar", "navbar-expand-lg", "fixed-top", "navbar-light", "bg-light"], [1, "container-fluid"], ["routerLinkActive", "router-link-active", 1, "navbar-brand", 3, "routerLink"], ["src", "../../../assets/logo.svg", "alt", "logo"], [1, "hidden"], ["class", "input-group search", 4, "ngIf"], [1, "navbar-nav", "d-flex", "flex-row", "align-items-center"], ["class", "mr-2", 3, "icon", "click", 4, "ngIf"], ["class", "nav-item", 4, "ngIf"], ["class", "nav-item ml-2", 4, "ngIf"], [1, "nav-item", "ml-2", "d-none", "showing", 3, "click"], ["routerLinkActive", "router-link-active", 1, "nav-link"], [3, "icon"], [1, "input-group", "search"], ["type", "text", "placeholder", "Search", "aria-label", "Recipient's username", "aria-describedby", "button-addon2", 1, "form-control", "search-input", 3, "value", "keyup"], ["myDiv", ""], ["type", "button", "id", "button-addon2", 1, "close-btn", 3, "click"], [1, "close-search", 3, "icon"], [1, "mr-2", 3, "icon", "click"], [1, "nav-item"], ["routerLinkActive", "router-link-active", 1, "nav-link", 3, "routerLink"], [1, "nav-item", "ml-2"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Dank Memes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavbarComponent_div_6_Template, 5, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NavbarComponent_fa_icon_8_Template, 1, 1, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NavbarComponent_li_9_Template, 4, 3, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NavbarComponent_li_10_Template, 4, 3, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_11_listener() { return ctx.toggleSideNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "fa-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSearch && ctx.currentRoute == "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showSearch && ctx.currentRoute == "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.provider.user && ctx.currentRoute == "/signin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.provider.user && ctx.currentRoute !== "/signin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faHamburger);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FaIconComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Lobster&display=swap\");\r\n.logged-as[_ngcontent-%COMP%] {\r\n  padding: 0 !important;\r\n  font-size: 0.9rem;\r\n}\r\n.navbar[_ngcontent-%COMP%] {\r\n  transition: all 0.3s ease-in-out;\r\n  box-shadow: 0 10px 10px -2px gray;\r\n}\r\n.navbar-brand[_ngcontent-%COMP%] {\r\n  font-family: \"Lobster\", cursive;\r\n  font-size: 1.5rem !important;\r\n}\r\nimg[_ngcontent-%COMP%] {\r\n  width: 60px;\r\n  height: 40px;\r\n}\r\n.search[_ngcontent-%COMP%] {\r\n  width: 20% !important;\r\n}\r\n.search-input[_ngcontent-%COMP%] {\r\n  outline: none !important;\r\n  border-radius: 1rem;\r\n  background-color: rgba(128, 128, 128, 0.411);\r\n  box-shadow: none;\r\n  border: none !important;\r\n}\r\n.search-input[_ngcontent-%COMP%]:focus {\r\n  outline: none !important;\r\n  border: none !important;\r\n}\r\n.close-search[_ngcontent-%COMP%] {\r\n  font-size: 1.5rem;\r\n  height: 100% !important;\r\n  outline: none !important;\r\n  padding: 0rem !important;\r\n  border: none !important;\r\n}\r\n.close-btn[_ngcontent-%COMP%] {\r\n  border-radius: none !important;\r\n  border-top-right-radius: 1rem;\r\n  border-bottom-right-radius: 1rem;\r\n  height: 100% !important;\r\n  border: none;\r\n  background-color: rgba(128, 128, 128, 0.411);\r\n}\r\n@media screen and (max-width: 1000px) {\r\n  .hidden[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  .showing[_ngcontent-%COMP%] {\r\n    display: block !important;\r\n  }\r\n  .logged-as[_ngcontent-%COMP%] {\r\n    font-size: 0.6rem !important;\r\n  }\r\n\r\n  .navbar-brand[_ngcontent-%COMP%] {\r\n    font-size: 0.8rem;\r\n  }\r\n\r\n  li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    font-size: 0.8rem !important;\r\n    padding: 0.1rem;\r\n  }\r\n\r\n  .search[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    padding: 0rem !important;\r\n  }\r\n}\r\n@media screen and (min-width: 1000px) {\r\n  .search[_ngcontent-%COMP%] {\r\n    margin-left: auto;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRFQUE0RTtBQUM1RTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxpQ0FBaUM7QUFDbkM7QUFFQTtFQUNFLCtCQUErQjtFQUMvQiw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQiw0Q0FBNEM7RUFDNUMsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsd0JBQXdCO0VBQ3hCLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWiw0Q0FBNEM7QUFDOUM7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLDRCQUE0QjtJQUM1QixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsT0FBTztJQUNQLHdCQUF3QjtFQUMxQjtBQUNGO0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvYnN0ZXImZGlzcGxheT1zd2FwXCIpO1xyXG4ubG9nZ2VkLWFzIHtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAxMHB4IC0ycHggZ3JheTtcclxufVxyXG5cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTG9ic3RlclwiLCBjdXJzaXZlO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4uc2VhcmNoIHtcclxuICB3aWR0aDogMjAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZWFyY2gtaW5wdXQge1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC40MTEpO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNlYXJjaC1pbnB1dDpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2xvc2Utc2VhcmNoIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMHJlbSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2xvc2UtYnRuIHtcclxuICBib3JkZXItcmFkaXVzOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDFyZW07XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDFyZW07XHJcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC40MTEpO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAuaGlkZGVuIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5zaG93aW5nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5sb2dnZWQtYXMge1xyXG4gICAgZm9udC1zaXplOiAwLjZyZW0gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5uYXZiYXItYnJhbmQge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgfVxyXG5cclxuICBsaSBhIHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwLjFyZW07XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBwYWRkaW5nOiAwcmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcclxuICAuc2VhcmNoIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-service.service */ "9ELd");
/* harmony import */ var _posts_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts-service.service */ "pRW/");
/* harmony import */ var _core_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/navbar/navbar.component */ "R2Se");
/* harmony import */ var _core_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/side-nav/side-nav.component */ "LjNy");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_scroll_to_top_scroll_to_top_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/scroll-to-top/scroll-to-top.component */ "DLJC");








function AppComponent_app_scroll_to_top_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-scroll-to-top");
} }
class AppComponent {
    constructor(userService, postsProvider) {
        this.userService = userService;
        this.postsProvider = postsProvider;
        this.title = 'client';
        this.sideNavShowing = false;
        this.current = 0;
    }
    ngOnInit() {
        this.userService.getUser();
        this.regulate();
        this.postsProvider.getPosts();
    }
    toggleSideNav(e) {
        this.sideNavShowing = e;
    }
    regulate() {
        let nav = document.querySelector('.navbar');
        document.addEventListener('scroll', () => {
            let scrolled = window.pageYOffset;
            if (scrolled > 1000) {
                this.postsProvider.showToTheTop = true;
            }
            else {
                this.postsProvider.showToTheTop = false;
            }
            if (this.current - scrolled < 0) {
                nav.style.transform = 'translateY(-120%)';
            }
            else {
                nav.style.transform = 'translateY(0%)';
            }
            this.current = window.pageYOffset;
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_posts_service_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 3, consts: [[3, "sideNavShowing", "showHideSideNav"], [3, "showing", "closeEvent"], [4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("showHideSideNav", function AppComponent_Template_app_navbar_showHideSideNav_0_listener($event) { return ctx.toggleSideNav($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-side-nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeEvent", function AppComponent_Template_app_side_nav_closeEvent_1_listener($event) { return ctx.toggleSideNav($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_app_scroll_to_top_2_Template, 1, 0, "app-scroll-to-top", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sideNavShowing", ctx.sideNavShowing);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showing", ctx.sideNavShowing);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.postsProvider.showToTheTop);
    } }, directives: [_core_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _core_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_4__["SideNavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _core_scroll_to_top_scroll_to_top_component__WEBPACK_IMPORTED_MODULE_7__["ScrollToTopComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "VDG5":
/*!***********************************!*\
  !*** ./src/app/models/Comment.ts ***!
  \***********************************/
/*! exports provided: Comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
class Comment {
    constructor(obj) {
        (this.comment_id = (obj && obj.comment_id) || null),
            (this.user_id = (obj && obj.user_id) || null),
            (this.post_id = (obj && obj.post_id) || null),
            (this.body = (obj && obj.body) || null),
            (this.reply_to = (obj && obj.reply_to) || null),
            (this.created_at = (obj && obj.created_at) || null),
            (this.likes = (obj && obj.likes) || null),
            (this.dislikes = (obj && obj.dislikes) || null),
            (this.subcomments = (obj && obj.subcomments) || null),
            (this.user_name = (obj && obj.user_name) || null),
            (this.parrent_comment_author =
                (obj && obj.parrent_comment_author) || null);
    }
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _core_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/navbar/navbar.component */ "R2Se");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signin/signin.component */ "/hi3");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _single_post_single_post_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./single-post/single-post.component */ "KchH");
/* harmony import */ var _token_itnerceptor_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./token-itnerceptor.service */ "ohki");
/* harmony import */ var _single_post_page_single_post_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./single-post-page/single-post-page.component */ "qmjx");
/* harmony import */ var _core_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/side-nav/side-nav.component */ "LjNy");
/* harmony import */ var _add_new_post_add_new_post_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./add-new-post/add-new-post.component */ "1Dzb");
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./comments/comments.component */ "f1Oy");
/* harmony import */ var _single_comment_single_comment_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./single-comment/single-comment.component */ "miHx");
/* harmony import */ var _post_comment_post_comment_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./post-comment/post-comment.component */ "AYdr");
/* harmony import */ var _single_comment_preview_single_comment_preview_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./single-comment-preview/single-comment-preview.component */ "AuWd");
/* harmony import */ var _core_side_nav_content_side_nav_content_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./core/side-nav-content/side-nav-content.component */ "ubOP");
/* harmony import */ var _posts_ilike_posts_ilike_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./posts-ilike/posts-ilike.component */ "o5Ft");
/* harmony import */ var _my_memes_my_memes_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./my-memes/my-memes.component */ "8WXK");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./auth.guard */ "tIkO");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./not-found/not-found.component */ "nod/");
/* harmony import */ var _core_scroll_to_top_scroll_to_top_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./core/scroll-to-top/scroll-to-top.component */ "DLJC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ "fXoL");


























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
            useClass: _token_itnerceptor_service__WEBPACK_IMPORTED_MODULE_11__["TokenItnerceptorService"],
            multi: true,
        },
        _auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _core_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
        _signin_signin_component__WEBPACK_IMPORTED_MODULE_7__["SigninComponent"],
        _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
        _single_post_single_post_component__WEBPACK_IMPORTED_MODULE_10__["SinglePostComponent"],
        _single_post_page_single_post_page_component__WEBPACK_IMPORTED_MODULE_12__["SinglePostPageComponent"],
        _core_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_13__["SideNavComponent"],
        _add_new_post_add_new_post_component__WEBPACK_IMPORTED_MODULE_14__["AddNewPostComponent"],
        _comments_comments_component__WEBPACK_IMPORTED_MODULE_15__["CommentsComponent"],
        _single_comment_single_comment_component__WEBPACK_IMPORTED_MODULE_16__["SingleCommentComponent"],
        _post_comment_post_comment_component__WEBPACK_IMPORTED_MODULE_17__["PostCommentComponent"],
        _single_comment_preview_single_comment_preview_component__WEBPACK_IMPORTED_MODULE_18__["SingleCommentPreviewComponent"],
        _core_side_nav_content_side_nav_content_component__WEBPACK_IMPORTED_MODULE_19__["SideNavContentComponent"],
        _posts_ilike_posts_ilike_component__WEBPACK_IMPORTED_MODULE_20__["PostsILikeComponent"],
        _my_memes_my_memes_component__WEBPACK_IMPORTED_MODULE_21__["MyMemesComponent"],
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_23__["NotFoundComponent"],
        _core_scroll_to_top_scroll_to_top_component__WEBPACK_IMPORTED_MODULE_24__["ScrollToTopComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]] }); })();


/***/ }),

/***/ "f1Oy":
/*!************************************************!*\
  !*** ./src/app/comments/comments.component.ts ***!
  \************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _comments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comments.service */ "matb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _single_comment_single_comment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../single-comment/single-comment.component */ "miHx");






function CommentsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CommentsComponent_app_single_comment_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-single-comment", 5);
} if (rf & 2) {
    const comment_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("comment", comment_r2);
} }
class CommentsComponent {
    constructor(commentsProvider, route) {
        this.commentsProvider = commentsProvider;
        this.route = route;
    }
    ngOnInit() {
        this.getPostId();
        this.commentsProvider.getAllComments(this.postId);
    }
    getPostId() {
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((p) => p.id)).subscribe((x) => {
            this.postId = x;
        });
    }
}
CommentsComponent.ɵfac = function CommentsComponent_Factory(t) { return new (t || CommentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_comments_service__WEBPACK_IMPORTED_MODULE_2__["CommentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
CommentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CommentsComponent, selectors: [["app-comments"]], decls: 3, vars: 2, consts: [[1, "container-fluid", "d-flex", "flex-column", "align-items-center", "w-100"], ["class", "spinner-border text-primary", "role", "status", 4, "ngIf"], ["class", "w-90 mt-3", 3, "comment", 4, "ngFor", "ngForOf"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "sr-only"], [1, "w-90", "mt-3", 3, "comment"]], template: function CommentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CommentsComponent_div_1_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CommentsComponent_app_single_comment_2_Template, 1, 1, "app-single-comment", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.commentsProvider.loadingComments);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.commentsProvider.comments);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _single_comment_single_comment_component__WEBPACK_IMPORTED_MODULE_5__["SingleCommentComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21tZW50cy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "f9ec":
/*!*************************************!*\
  !*** ./src/app/models/PostsList.ts ***!
  \*************************************/
/*! exports provided: PostsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsList", function() { return PostsList; });
class PostsList {
    /**
     *
     */
    constructor(obj) {
        this.posts = (obj && obj.posts) || null;
    }
}


/***/ }),

/***/ "matb":
/*!*************************************!*\
  !*** ./src/app/comments.service.ts ***!
  \*************************************/
/*! exports provided: CommentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsService", function() { return CommentsService; });
/* harmony import */ var _models_Comment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/Comment */ "VDG5");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_GetCommentsServer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/GetCommentsServer */ "qQR8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






class CommentsService {
    constructor(http, location) {
        this.http = http;
        this.location = location;
        this.url = 'https://rajko-meme-app.herokuapp.com/api/comments/';
        this.comments = [];
        this.loadingSubcomments = true;
        this.subcomments = [];
        this.singleCommentExists = false;
    }
    getAllComments(id) {
        this.loadingComments = true;
        this.http
            .get(this.url + 'post/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((x) => {
            this.comments = x.data.comments;
            this.loadingComments = false;
        }, (e) => {
            console.log(e);
            this.loadingComments = false;
        }))
            .subscribe();
    }
    likeDislikeComment(id, action) {
        return this.http.post(this.url + 'likedislike/' + id, { action }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((x) => {
            return x.data.status;
        }));
    }
    checkLikeDislike(id) {
        /*   const token = localStorage.getItem('token');
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        }); */
        return this.http
            .get(this.url + 'likedislike/' + id /* , { headers } */)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((x) => {
            return x.data.status;
        }));
    }
    deleteComment(id, partOfPreviewComponent) {
        this.http.delete(this.url + id).subscribe((x) => {
            if (partOfPreviewComponent) {
                this.location.back();
                this.singleCommentExists = false;
            }
            let indexInComments = this.comments.findIndex((x) => x.comment_id == id);
            let indexInSubcomments = this.subcomments.findIndex((x) => x.comment_id == id);
            this.comments.splice(indexInComments, 1);
            this.subcomments.splice(indexInSubcomments, 1);
            this.removeDependingComments(id);
            this.removeDependingSubcomments(id);
        }, (e) => {
            console.log(e);
        });
    }
    removeDependingComments(id) {
        let dependingComments = this.comments.filter((c) => c.reply_to == id);
        dependingComments.forEach((d) => {
            let index = this.comments.findIndex((c) => c.comment_id == d.comment_id);
            this.comments.splice(index, 1);
            this.removeDependingComments(d.comment_id);
        });
    }
    removeDependingSubcomments(id) {
        let dependingSubcomments = this.subcomments.filter((c) => c.reply_to == id);
        dependingSubcomments.forEach((d) => {
            let index = this.subcomments.findIndex((c) => c.comment_id == d.comment_id);
            this.subcomments.splice(index, 1);
        });
    }
    postComment(body, post_id, reply_to) {
        let payload = { body, post_id };
        if (reply_to) {
            payload['reply_to'] = reply_to;
        }
        return this.http
            .post(this.url, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((x) => {
            return new _models_Comment__WEBPACK_IMPORTED_MODULE_0__["Comment"](x.data.comment);
        }))
            .subscribe((x) => {
            this.comments.unshift(x);
            this.subcomments.unshift(x);
            let index = this.comments.findIndex((c) => c.comment_id == x.reply_to);
            if (index > 0) {
                this.comments[index].subcomments++;
            }
        }, (e) => {
            console.log(e);
        });
    }
    getSingleComment(id) {
        return this.http.get(this.url + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((x) => {
            return new _models_Comment__WEBPACK_IMPORTED_MODULE_0__["Comment"](x.data.comment);
        }));
    }
    getSubcomments(id) {
        return this.http
            .get(this.url + 'subcomments/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((x) => {
            return new _models_GetCommentsServer__WEBPACK_IMPORTED_MODULE_2__["GetCommentsServer"](x);
        }))
            .subscribe((x) => {
            this.subcomments = x.data.comments;
            this.loadingSubcomments = false;
        });
    }
}
CommentsService.ɵfac = function CommentsService_Factory(t) { return new (t || CommentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"])); };
CommentsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CommentsService, factory: CommentsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "miHx":
/*!************************************************************!*\
  !*** ./src/app/single-comment/single-comment.component.ts ***!
  \************************************************************/
/*! exports provided: SingleCommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleCommentComponent", function() { return SingleCommentComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _comments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comments.service */ "matb");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-service.service */ "9ELd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _post_comment_post_comment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../post-comment/post-comment.component */ "AYdr");








const _c0 = function (a1, a3) { return ["/post", a1, "comment", a3]; };
function SingleCommentComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c0, ctx_r0.comment.post_id, ctx_r0.comment.reply_to));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("in reply to: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, ctx_r0.comment.parrent_comment_author), " 's comment");
} }
function SingleCommentComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SingleCommentComponent_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.deleteComment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r1.faTrash);
} }
function SingleCommentComponent_app_post_comment_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-post-comment", 17);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("comment", ctx_r2.comment)("postId", ctx_r2.comment.post_id);
} }
const _c1 = function (a0) { return { "text-success": a0 }; };
const _c2 = function (a0) { return { "text-danger": a0 }; };
class SingleCommentComponent {
    constructor(commentsProvider, userService, router) {
        this.commentsProvider = commentsProvider;
        this.userService = userService;
        this.router = router;
        this.faThumbsUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faThumbsUp"];
        this.faThumbsDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faThumbsDown"];
        this.faComment = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faComment"];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faTrash"];
        this.faReply = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faReply"];
        this.showReply = false;
    }
    ngOnInit() {
        if (this.userService.user) {
            this.checkLikeDislike(this.comment.comment_id);
        }
    }
    checkLikeDislike(id) {
        return this.commentsProvider.checkLikeDislike(id).subscribe((x) => {
            this.liked = x;
        }, (e) => {
            console.log(e);
        });
    }
    likeDislike(action) {
        if (!this.userService.user) {
            this.userService.setError('Please sign in first!');
            this.router.navigateByUrl('/signin');
            return;
        }
        this.commentsProvider
            .likeDislikeComment(this.comment.comment_id, action)
            .subscribe((x) => {
            if (this.liked == 2 && action) {
                this.comment.likes++;
            }
            if (this.liked == 2 && !action) {
                this.comment.dislikes++;
            }
            if (this.liked == 1 && action) {
                this.comment.likes--;
            }
            if (this.liked == 0 && !action) {
                this.comment.dislikes--;
            }
            if (this.liked == 0 && action) {
                this.comment.likes++;
                this.comment.dislikes--;
            }
            if (this.liked == 1 && !action) {
                this.comment.likes--;
                this.comment.dislikes++;
            }
            this.liked = x;
        }, (e) => {
            console.log(e);
        });
    }
    setShowReply() {
        this.showReply = !this.showReply;
    }
    deleteComment() {
        this.commentsProvider.deleteComment(this.comment.comment_id, this.partOfPreviewComponent);
    }
}
SingleCommentComponent.ɵfac = function SingleCommentComponent_Factory(t) { return new (t || SingleCommentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_comments_service__WEBPACK_IMPORTED_MODULE_2__["CommentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
SingleCommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SingleCommentComponent, selectors: [["app-single-comment"]], inputs: { comment: "comment", partOfPreviewComponent: "partOfPreviewComponent" }, decls: 27, vars: 32, consts: [[1, "comment", "p-2"], [1, "comment_header", "d-flex", "justify-content-between"], [1, "div"], [1, "comment_author"], ["routerLinkActive", "router-link-active", "class", "comment_reply_to ml-3", 3, "routerLink", 4, "ngIf"], [1, "comment_date", "font-italic"], [1, "comment_body", "lead", "p-1", 3, "routerLink"], [1, "comment_footer", "d-flex", "flex-column", "justify-content-end"], [1, "comment_buttons", "d-flex", "ml-auto", "mb-2"], ["class", "btn btn-outline-dark d-flex align-items-center ml-2 text-danger", 3, "click", 4, "ngIf"], [1, "btn", "btn-outline-dark", "d-flex", "align-items-center", "ml-2", 3, "click"], [3, "icon"], [1, "btn", "btn-outline-dark", "d-flex", "align-items-center", "ml-2", 3, "routerLink"], [3, "ngClass", "icon"], [3, "comment", "postId", 4, "ngIf"], ["routerLinkActive", "router-link-active", 1, "comment_reply_to", "ml-3", 3, "routerLink"], [1, "btn", "btn-outline-dark", "d-flex", "align-items-center", "ml-2", "text-danger", 3, "click"], [3, "comment", "postId"]], template: function SingleCommentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SingleCommentComponent_a_6_Template, 3, 7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, SingleCommentComponent_button_14_Template, 2, 1, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SingleCommentComponent_Template_button_click_15_listener() { return ctx.setShowReply(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "fa-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "fa-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SingleCommentComponent_Template_button_click_20_listener() { return ctx.likeDislike(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "fa-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SingleCommentComponent_Template_button_click_23_listener() { return ctx.likeDislike(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "fa-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, SingleCommentComponent_app_post_comment_26_Template, 1, 2, "app-post-comment", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 18, ctx.comment.user_name));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.comment.parrent_comment_author);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 20, ctx.comment.created_at));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](22, _c0, ctx.comment.post_id, ctx.comment.comment_id));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx.comment.body == null ? null : ctx.comment.body.charAt(0).toUpperCase(), "", ctx.comment.body == null ? null : ctx.comment.body.substring(1, ctx.comment.body.length), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.comment.user_id == (ctx.userService.user == null ? null : ctx.userService.user.user_id));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faReply);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](25, _c0, ctx.comment.post_id, ctx.comment.comment_id));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.comment.subcomments, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faComment);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.comment == null ? null : ctx.comment.likes, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](28, _c1, ctx.liked == 1))("icon", ctx.faThumbsUp);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.comment == null ? null : ctx.comment.dislikes, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](30, _c2, ctx.liked == 0))("icon", ctx.faThumbsDown);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showReply);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _post_comment_post_comment_component__WEBPACK_IMPORTED_MODULE_7__["PostCommentComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".comment[_ngcontent-%COMP%] {\r\n  box-shadow: 4px 4px 14px black;\r\n  max-width: 600px;\r\n  margin: auto;\r\n  border-radius: 0.2rem;\r\n  background-color: rgb(230, 227, 227);\r\n}\r\n\r\n.comment_reply_to[_ngcontent-%COMP%] {\r\n  font-style: italic;\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.comment_body[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n\r\n.comment_author[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .comment_buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    padding: 0.2rem;\r\n  }\r\n  .comment[_ngcontent-%COMP%] {\r\n    min-width: 90vw !important;\r\n  }\r\n  .comment_date[_ngcontent-%COMP%] {\r\n    font-size: 0.8rem;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 600px) {\r\n  .comment[_ngcontent-%COMP%] {\r\n    min-width: 600px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbmdsZS1jb21tZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6InNpbmdsZS1jb21tZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tbWVudCB7XHJcbiAgYm94LXNoYWRvdzogNHB4IDRweCAxNHB4IGJsYWNrO1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCAyMjcsIDIyNyk7XHJcbn1cclxuXHJcbi5jb21tZW50X3JlcGx5X3RvIHtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbn1cclxuXHJcbi5jb21tZW50X2JvZHkge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNvbW1lbnRfYXV0aG9yIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuY29tbWVudF9idXR0b25zIGJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAwLjJyZW07XHJcbiAgfVxyXG4gIC5jb21tZW50IHtcclxuICAgIG1pbi13aWR0aDogOTB2dyAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuY29tbWVudF9kYXRlIHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAuY29tbWVudCB7XHJcbiAgICBtaW4td2lkdGg6IDYwMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "nod/":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 1, vars: 0, consts: [["src", "../../assets/404.jpg", "alt", "Page not found"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } }, styles: ["img[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin: auto;\r\n  margin-top: 100px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixpQkFBaUI7QUFDbkIiLCJmaWxlIjoibm90LWZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "o5Ft":
/*!******************************************************!*\
  !*** ./src/app/posts-ilike/posts-ilike.component.ts ***!
  \******************************************************/
/*! exports provided: PostsILikeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsILikeComponent", function() { return PostsILikeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _posts_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../posts-service.service */ "pRW/");
/* harmony import */ var _core_side_nav_content_side_nav_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/side-nav-content/side-nav-content.component */ "ubOP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _single_post_single_post_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../single-post/single-post.component */ "KchH");





function PostsILikeComponent_app_single_post_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-single-post", 6);
} if (rf & 2) {
    const post_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", post_r1);
} }
class PostsILikeComponent {
    constructor(postsProvider) {
        this.postsProvider = postsProvider;
    }
    ngOnInit() {
        this.getPosts();
    }
    getPosts() {
        this.postsProvider.getLikedPosts().subscribe((x) => {
            this.likedPosts = x;
        }, (e) => {
            console.log(e);
        });
    }
}
PostsILikeComponent.ɵfac = function PostsILikeComponent_Factory(t) { return new (t || PostsILikeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_posts_service_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"])); };
PostsILikeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostsILikeComponent, selectors: [["app-posts-ilike"]], decls: 7, vars: 1, consts: [[1, "everything", "mt-0"], [1, "side", "mt-0"], [1, "lll", "mt-0"], [1, "experiment"], [1, "main", "mt-4"], ["class", "d-flex justify-content-center", 3, "post", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center", 3, "post"]], template: function PostsILikeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-side-nav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PostsILikeComponent_app_single_post_6_Template, 1, 1, "app-single-post", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.likedPosts);
    } }, directives: [_core_side_nav_content_side_nav_content_component__WEBPACK_IMPORTED_MODULE_2__["SideNavContentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _single_post_single_post_component__WEBPACK_IMPORTED_MODULE_4__["SinglePostComponent"]], styles: [".main[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: auto;\r\n}\r\n\r\n@media screen and (min-width: 1000px) {\r\n  .main[_ngcontent-%COMP%] {\r\n    width: 33.33%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n  .main[_ngcontent-%COMP%] {\r\n    width: 100% !important;\r\n  }\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: auto;\r\n}\r\n\r\n@media screen and (min-width: 1000px) {\r\n  .main[_ngcontent-%COMP%] {\r\n    width: 33.33%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n  .main[_ngcontent-%COMP%] {\r\n    width: 100% !important;\r\n  }\r\n}\r\n\r\n\r\n\r\n.side[_ngcontent-%COMP%] {\r\n  width: 33.33%;\r\n}\r\n\r\n.lll[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  background-color: rgba(82, 82, 82, 0.377);\r\n\r\n  width: 230px;\r\n  height: 100vh;\r\n  box-shadow: 10px 0 5px -2px #888;\r\n}\r\n\r\n.experiment[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  z-index: -1000;\r\n  background: url('vT04jS.png');\r\n  opacity: 0.2;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n}\r\n\r\n@media screen and (min-width: 1000px) {\r\n  .main[_ngcontent-%COMP%] {\r\n    width: 33.33%;\r\n  }\r\n  .lll[_ngcontent-%COMP%] {\r\n    width: 180px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1150px) {\r\n  .lll[_ngcontent-%COMP%] {\r\n    width: 260px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1400px) {\r\n  .lll[_ngcontent-%COMP%] {\r\n    width: 400px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n  .main[_ngcontent-%COMP%] {\r\n    width: 100% !important;\r\n  }\r\n  .side[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\r\n\r\n.show[_ngcontent-%COMP%] {\r\n  transform: translateX(0%);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RzLWlsaWtlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCO0FBQ0Y7O0FBQ0EsYUFBYTs7QUFFYjtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04seUNBQXlDOztFQUV6QyxZQUFZO0VBQ1osYUFBYTtFQUNiLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsNkJBQTBDO0VBQzFDLFlBQVk7RUFDWixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0FBQ1g7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJwb3N0cy1pbGlrZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XHJcbiAgLm1haW4ge1xyXG4gICAgd2lkdGg6IDMzLjMzJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gIC5tYWluIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcclxuICAubWFpbiB7XHJcbiAgICB3aWR0aDogMzMuMzMlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgLm1haW4ge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuLyogYXNkZmFzZmQgKi9cclxuXHJcbi5zaWRlIHtcclxuICB3aWR0aDogMzMuMzMlO1xyXG59XHJcblxyXG4ubGxsIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODIsIDgyLCA4MiwgMC4zNzcpO1xyXG5cclxuICB3aWR0aDogMjMwcHg7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBib3gtc2hhZG93OiAxMHB4IDAgNXB4IC0ycHggIzg4ODtcclxufVxyXG5cclxuLmV4cGVyaW1lbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAtMTAwMDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvdlQwNGpTLnBuZ1wiKTtcclxuICBvcGFjaXR5OiAwLjI7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcclxuICAubWFpbiB7XHJcbiAgICB3aWR0aDogMzMuMzMlO1xyXG4gIH1cclxuICAubGxsIHtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExNTBweCkge1xyXG4gIC5sbGwge1xyXG4gICAgd2lkdGg6IDI2MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQwMHB4KSB7XHJcbiAgLmxsbCB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAubWFpbiB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuc2lkZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLnNob3cge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "ohki":
/*!**********************************************!*\
  !*** ./src/app/token-itnerceptor.service.ts ***!
  \**********************************************/
/*! exports provided: TokenItnerceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenItnerceptorService", function() { return TokenItnerceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TokenItnerceptorService {
    constructor() { }
    intercept(req, next) {
        let token = localStorage.getItem('token');
        let tokenizedReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`,
            },
        });
        return next.handle(tokenizedReq);
    }
}
TokenItnerceptorService.ɵfac = function TokenItnerceptorService_Factory(t) { return new (t || TokenItnerceptorService)(); };
TokenItnerceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenItnerceptorService, factory: TokenItnerceptorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "pRW/":
/*!******************************************!*\
  !*** ./src/app/posts-service.service.ts ***!
  \******************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_GetPostsServer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/GetPostsServer */ "HVhy");
/* harmony import */ var _models_Post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/Post */ "OF70");
/* harmony import */ var _models_PostsList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/PostsList */ "f9ec");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







class PostsService {
    constructor(http) {
        this.http = http;
        this.url = 'https://rajko-meme-app.herokuapp.com/api/posts/';
        this.page = 1;
        this.order_by = 'created_at';
        this.order = 2;
        this.like = '';
        this.posts = [];
        this.loadingPosts = false;
        this.noContent = false;
        this.showToTheTop = false;
    }
    getPosts() {
        this.loadingPosts = true;
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .set('page', this.page.toString())
            .set('order_by', this.order_by)
            .set('order', this.order.toString())
            .set('like', this.like);
        this.http
            .get(this.url, { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((x) => {
            return new _models_PostsList__WEBPACK_IMPORTED_MODULE_4__["PostsList"](x.data);
        }))
            .subscribe((x) => {
            if (!x.posts.length) {
                this.noContent = true;
            }
            else {
                this.noContent = false;
            }
            x.posts.forEach((p) => {
                this.posts.push(p);
            });
            this.loadingPosts = false;
            let height = document.documentElement.scrollHeight;
            if (height == window.innerHeight) {
                this.getPosts();
            }
        }, (e) => {
            this.loadingPosts = false;
            console.log(e);
        });
        this.page++;
    }
    getSinglePost(id) {
        return this.http.get(this.url + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((x) => {
            return new _models_Post__WEBPACK_IMPORTED_MODULE_3__["Post"](x.data.post);
        }));
    }
    getLikedPosts() {
        return this.http.get(this.url + 'liked').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((x) => {
            let serverResponse = new _models_GetPostsServer__WEBPACK_IMPORTED_MODULE_2__["GetPostsServer"](x);
            console.log(serverResponse);
            return serverResponse.data.posts;
        }));
    }
    getMyPosts() {
        return this.http
            .get(this.url + 'my')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((x) => {
            let serverResponse = new _models_GetPostsServer__WEBPACK_IMPORTED_MODULE_2__["GetPostsServer"](x);
            return serverResponse.data.posts;
        }))
            .subscribe((x) => {
            this.myPosts = x;
        }, (e) => {
            console.log(e);
        });
    }
    checkLikeDislike(id) {
        /*   const token = localStorage.getItem('token');
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        }); */
        return this.http
            .get(this.url + 'likedislike/' + id /* , { headers } */)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((x) => {
            return x.data.status;
        }));
    }
    likeDislikePost(id, action) {
        return this.http.post(this.url + 'likedislike/' + id, { action }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((x) => {
            return x.data.status;
        }));
    }
    addNewPost(formData) {
        return this.http.post(this.url, formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((x) => {
            return new _models_Post__WEBPACK_IMPORTED_MODULE_3__["Post"](x.data.post);
        }));
    }
    deletePost(id) {
        return this.http.delete(this.url + id);
    }
}
PostsService.ɵfac = function PostsService_Factory(t) { return new (t || PostsService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
PostsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: PostsService, factory: PostsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "qQR8":
/*!*********************************************!*\
  !*** ./src/app/models/GetCommentsServer.ts ***!
  \*********************************************/
/*! exports provided: GetCommentsServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCommentsServer", function() { return GetCommentsServer; });
class GetCommentsServer {
    /**
     *
     */
    constructor(obj) {
        this.data = (obj && obj.data) || null;
    }
}


/***/ }),

/***/ "qmjx":
/*!****************************************************************!*\
  !*** ./src/app/single-post-page/single-post-page.component.ts ***!
  \****************************************************************/
/*! exports provided: SinglePostPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglePostPageComponent", function() { return SinglePostPageComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _posts_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../posts-service.service */ "pRW/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _comments_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../comments.service */ "matb");
/* harmony import */ var _core_side_nav_content_side_nav_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/side-nav-content/side-nav-content.component */ "ubOP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _post_comment_post_comment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../post-comment/post-comment.component */ "AYdr");
/* harmony import */ var _single_post_single_post_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../single-post/single-post.component */ "KchH");









function SinglePostPageComponent_app_single_post_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-single-post", 10);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("post", ctx_r0.post);
} }
class SinglePostPageComponent {
    constructor(postsProvider, route, commentsProvider) {
        this.postsProvider = postsProvider;
        this.route = route;
        this.commentsProvider = commentsProvider;
    }
    ngOnInit() {
        this.getPostId();
        this.getPost();
    }
    getPostId() {
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((p) => p.id)).subscribe((x) => {
            this.currentPostId = x;
        });
    }
    getPost() {
        this.postsProvider.getSinglePost(this.currentPostId).subscribe((x) => {
            this.post = x;
        }, (e) => {
            console.log(e);
        });
    }
}
SinglePostPageComponent.ɵfac = function SinglePostPageComponent_Factory(t) { return new (t || SinglePostPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_posts_service_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_comments_service__WEBPACK_IMPORTED_MODULE_4__["CommentsService"])); };
SinglePostPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SinglePostPageComponent, selectors: [["app-single-post-page"]], decls: 12, vars: 2, consts: [[1, "everything", "mt-0"], [1, "side", "mt-0"], [1, "lll", "mt-0"], [1, "experiment"], [1, "d-flex", "flex-column", "justify-content-center", "align-items-center"], [1, "container"], ["class", "d-flex justify-content-center mt-5", 3, "post", 4, "ngIf"], [1, "post-comment", "mt-2"], [3, "postId"], [1, "container-fluid", "comments-list"], [1, "d-flex", "justify-content-center", "mt-5", 3, "post"]], template: function SinglePostPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-side-nav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SinglePostPageComponent_app_single_post_7_Template, 1, 1, "app-single-post", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "app-post-comment", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.post);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("postId", ctx.currentPostId);
    } }, directives: [_core_side_nav_content_side_nav_content_component__WEBPACK_IMPORTED_MODULE_5__["SideNavContentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _post_comment_post_comment_component__WEBPACK_IMPORTED_MODULE_7__["PostCommentComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _single_post_single_post_component__WEBPACK_IMPORTED_MODULE_8__["SinglePostComponent"]], styles: [".post-comment[_ngcontent-%COMP%] {\r\n  max-width: 50% !important;\r\n}\r\n\r\n.xxx[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.comments-list[_ngcontent-%COMP%] {\r\n  max-width: 50% !important;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 0;\r\n}\r\n\r\n@media screen and (min-width: 600px) {\r\n  .post-comment[_ngcontent-%COMP%], .comments-list[_ngcontent-%COMP%] {\r\n    min-width: 600px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .post-comment[_ngcontent-%COMP%], .comments-list[_ngcontent-%COMP%] {\r\n    min-width: 90%;\r\n  }\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: auto;\r\n}\r\n\r\n@media screen and (min-width: 1000px) {\r\n  .main[_ngcontent-%COMP%] {\r\n    width: 33.33%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n  .main[_ngcontent-%COMP%] {\r\n    width: 100% !important;\r\n  }\r\n}\r\n\r\n\r\n\r\n.side[_ngcontent-%COMP%] {\r\n  width: 33.33%;\r\n}\r\n\r\n.lll[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  background-color: rgba(82, 82, 82, 0.377);\r\n\r\n  width: 230px;\r\n  height: 100vh;\r\n  box-shadow: 10px 0 5px -2px #888;\r\n}\r\n\r\n.experiment[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  z-index: -1000;\r\n  background: url('vT04jS.png');\r\n  opacity: 0.2;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n}\r\n\r\n@media screen and (min-width: 1000px) {\r\n  .main[_ngcontent-%COMP%] {\r\n    width: 33.33%;\r\n  }\r\n  .lll[_ngcontent-%COMP%] {\r\n    width: 180px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1150px) {\r\n  .lll[_ngcontent-%COMP%] {\r\n    width: 260px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1400px) {\r\n  .lll[_ngcontent-%COMP%] {\r\n    width: 400px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n  .main[_ngcontent-%COMP%] {\r\n    width: 100% !important;\r\n  }\r\n  .side[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\r\n\r\n.show[_ngcontent-%COMP%] {\r\n  transform: translateX(0%);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbmdsZS1wb3N0LXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBRUE7RUFDRTs7SUFFRSxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFOztJQUVFLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7RUFDeEI7QUFDRjs7QUFDQSxhQUFhOztBQUViO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTix5Q0FBeUM7O0VBRXpDLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCw2QkFBMEM7RUFDMUMsWUFBWTtFQUNaLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7QUFDWDs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNpbmdsZS1wb3N0LXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0LWNvbW1lbnQge1xyXG4gIG1heC13aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi54eHgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29tbWVudHMtbGlzdCB7XHJcbiAgbWF4LXdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gIC5wb3N0LWNvbW1lbnQsXHJcbiAgLmNvbW1lbnRzLWxpc3Qge1xyXG4gICAgbWluLXdpZHRoOiA2MDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLnBvc3QtY29tbWVudCxcclxuICAuY29tbWVudHMtbGlzdCB7XHJcbiAgICBtaW4td2lkdGg6IDkwJTtcclxuICB9XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xyXG4gIC5tYWluIHtcclxuICAgIHdpZHRoOiAzMy4zMyU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAubWFpbiB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4vKiBhc2RmYXNmZCAqL1xyXG5cclxuLnNpZGUge1xyXG4gIHdpZHRoOiAzMy4zMyU7XHJcbn1cclxuXHJcbi5sbGwge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MiwgODIsIDgyLCAwLjM3Nyk7XHJcblxyXG4gIHdpZHRoOiAyMzBweDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJveC1zaGFkb3c6IDEwcHggMCA1cHggLTJweCAjODg4O1xyXG59XHJcblxyXG4uZXhwZXJpbWVudCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IC0xMDAwO1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy92VDA0alMucG5nXCIpO1xyXG4gIG9wYWNpdHk6IDAuMjtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xyXG4gIC5tYWluIHtcclxuICAgIHdpZHRoOiAzMy4zMyU7XHJcbiAgfVxyXG4gIC5sbGwge1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTE1MHB4KSB7XHJcbiAgLmxsbCB7XHJcbiAgICB3aWR0aDogMjYwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDAwcHgpIHtcclxuICAubGxsIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gIC5tYWluIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5zaWRlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4uc2hvdyB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "rd1V":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-service.service */ "9ELd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






function SignupComponent_small_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Username is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignupComponent_small_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignupComponent_small_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Invalid email format");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignupComponent_small_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password must be at least 6 characters long.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignupComponent_small_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignupComponent_small_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please confirm your password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignupComponent_small_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Passwords do not match ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignupComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", error_r8.msg, " ");
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
const _c1 = function () { return ["/signin"]; };
class SignupComponent {
    constructor(fb, provider) {
        this.fb = fb;
        this.provider = provider;
    }
    ngOnInit() {
        this.initializeForm();
    }
    initializeForm() {
        this.form = this.fb.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            ]),
            password2: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
        }, {
            validator: this.comparePasswords('password', 'password2'),
        });
    }
    comparePasswords(password, password2) {
        return (formGroup) => {
            const pas = formGroup.controls[password];
            const pas2 = formGroup.controls[password2];
            if (pas.value !== pas2.value) {
                pas2.setErrors({ passwordMismatch: true });
            }
            else {
                pas2.setErrors(null);
            }
        };
    }
    register() {
        let credentials = {
            name: this.form.get('username').value,
            email: this.form.get('email').value,
            password: this.form.get('password').value,
        };
        console.log(credentials);
        this.provider.register(credentials);
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 33, vars: 24, consts: [[1, "sign", 3, "formGroup", "ngSubmit"], [1, "text-center", "mb-5"], [1, "form-group"], ["for", "exampleInputPassword1"], ["type", "text", "formControlName", "username", "placeholder", "Username", 1, "form-control", 3, "ngClass"], ["class", "error-message", 4, "ngIf"], ["for", "exampleInputEmail1"], ["type", "email", "formControlName", "email", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "Enter email", 1, "form-control", 3, "ngClass"], ["type", "password", "formControlName", "password", "placeholder", "Password", 1, "form-control", 3, "ngClass"], ["type", "password", "formControlName", "password2", "id", "exampleInputPassword1", "placeholder", "Confirm Password", 1, "form-control", 3, "ngClass"], ["type", "submit", 1, "btn", "btn-primary", "d-block", "m-auto", 3, "disabled"], [1, "lead", "d-block", "m-auto", "text-center", "mt-3"], ["routerLinkActive", "router-link-active", 3, "routerLink"], ["class", "text-danger m-auto text-center", 4, "ngFor", "ngForOf"], [1, "error-message"], [1, "text-danger", "m-auto", "text-center"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_0_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Signup");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SignupComponent_small_7_Template, 2, 0, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SignupComponent_small_12_Template, 2, 0, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SignupComponent_small_13_Template, 2, 0, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, SignupComponent_small_18_Template, 2, 0, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, SignupComponent_small_19_Template, 2, 0, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, SignupComponent_small_24_Template, 2, 0, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, SignupComponent_small_25_Template, 2, 0, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, SignupComponent_div_32_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c0, ctx.form.get("username").invalid && ctx.form.get("username").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.get("username").invalid && ctx.form.get("username").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c0, ctx.form.get("email").invalid && ctx.form.get("email").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.get("email").hasError("required") && ctx.form.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.get("email").hasError("email") && ctx.form.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](19, _c0, ctx.form.get("password").invalid && ctx.form.get("password").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.get("password").hasError("minlength") && ctx.form.get("password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.get("password").hasError("required") && ctx.form.get("password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](21, _c0, ctx.form.get("password2").invalid && ctx.form.get("password2").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.get("password2").hasError("required") && ctx.form.get("password2").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.get("password2").errors && ctx.form.get("password2").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.form.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](23, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.provider.errors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "tIkO":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-service.service */ "9ELd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuard {
    constructor(userProvider, router) {
        this.userProvider = userProvider;
        this.router = router;
    }
    canActivate() {
        let user = localStorage.getItem('user');
        if (user) {
            return true;
        }
        else {
            this.userProvider.setError('Please log in to see this page !');
            this.router.navigateByUrl('/signin');
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_service_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ubOP":
/*!*********************************************************************!*\
  !*** ./src/app/core/side-nav-content/side-nav-content.component.ts ***!
  \*********************************************************************/
/*! exports provided: SideNavContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavContentComponent", function() { return SideNavContentComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_user_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/user-service.service */ "9ELd");
/* harmony import */ var src_app_posts_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/posts-service.service */ "pRW/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");










const _c0 = function () { return ["/mymemes"]; };
function SideNavContentComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "fa-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " My Memes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r0.faUserAlt);
} }
const _c1 = function () { return ["/liked"]; };
function SideNavContentComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "fa-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Memes I Like ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r1.faHeart);
} }
function SideNavContentComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SideNavContentComponent_div_7_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "fa-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r2.faSignOutAlt);
} }
function SideNavContentComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SideNavContentComponent_div_8_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.preventPropagation($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Sort By");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function SideNavContentComponent_div_8_Template_select_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.setOrderBy($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Likes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Dislikes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Sort Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function SideNavContentComponent_div_8_Template_select_change_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r10.setOrder($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Descending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Ascending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r3.postsProvider.order_by);
} }
function SideNavContentComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SideNavContentComponent_div_9_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.preventPropagation($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Logged in as ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r4.userProvider.user.user_name), " ");
} }
const _c2 = function () { return ["/new"]; };
class SideNavContentComponent {
    constructor(userProvider, postsProvider, router, location) {
        this.userProvider = userProvider;
        this.postsProvider = postsProvider;
        this.router = router;
        this.location = location;
        this.faHeart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faHeart"];
        this.faUserAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faUserAlt"];
        this.faSignOutAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faSignOutAlt"];
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faPlus"];
    }
    ngOnInit() {
        this.currentRoute = this.location.path() || '/';
        this.subscription = this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]))
            .subscribe((event) => {
            if (event.url) {
                this.currentRoute = event.url || '/';
            }
        });
    }
    logout() {
        this.userProvider.logout();
    }
    preventPropagation(e) {
        e.stopPropagation();
    }
    setOrderBy(e) {
        this.postsProvider.order_by = e.target.value;
        this.postsProvider.page = 1;
        this.postsProvider.posts.length = 0;
        this.postsProvider.getPosts();
    }
    setOrder(e) {
        this.postsProvider.order = e.target.value;
        this.postsProvider.page = 1;
        this.postsProvider.posts.length = 0;
        this.postsProvider.getPosts();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
SideNavContentComponent.ɵfac = function SideNavContentComponent_Factory(t) { return new (t || SideNavContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_user_service_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_posts_service_service__WEBPACK_IMPORTED_MODULE_5__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"])); };
SideNavContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SideNavContentComponent, selectors: [["app-side-nav-content"]], decls: 10, vars: 8, consts: [[1, "content"], ["src", "../../../assets/jao.png", "alt", "jao"], ["class", "side-nav-item", 3, "routerLink", 4, "ngIf"], ["routerLinkActive", "router-link-active", 1, "side-nav-item", 3, "routerLink"], [1, "mr-2", 3, "icon"], ["class", "side-nav-item", 3, "click", 4, "ngIf"], ["class", "pagination-params", 3, "click", 4, "ngIf"], [1, "side-nav-item", 3, "routerLink"], [1, "side-nav-item", 3, "click"], [1, "pagination-params", 3, "click"], [1, "form-group"], ["for", "exampleFormControlSelect1"], ["id", "exampleFormControlSelect1", 1, "form-control", 3, "value", "change"], ["value", "created_at"], ["value", "likes"], ["value", "dislikes"], ["value", "comments"], ["id", "exampleFormControlSelect1", 1, "form-control", 3, "change"], ["value", "2"], ["value", "1"]], template: function SideNavContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SideNavContentComponent_div_2_Template, 3, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SideNavContentComponent_div_3_Template, 3, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Post a meme ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, SideNavContentComponent_div_7_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, SideNavContentComponent_div_8_Template, 20, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, SideNavContentComponent_div_9_Template, 3, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.userProvider.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.userProvider.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.faPlus);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.userProvider.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentRoute == "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.userProvider.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FaIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_z"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["TitleCasePipe"]], styles: [".side-nav-item[_ngcontent-%COMP%] {\r\n  background-color: rgb(78, 76, 76);\r\n  font-weight: bold;\r\n  padding: 0.2rem;\r\n  color: rgb(255, 255, 255);\r\n  margin-top: 0.2rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.side-nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: rgb(255, 255, 255);\r\n}\r\n\r\n.side-nav-item[_ngcontent-%COMP%]:first-of-type {\r\n  margin-top: 30px;\r\n}\r\n\r\n.pagination-params[_ngcontent-%COMP%] {\r\n  background-color: rgb(78, 76, 76);\r\n  font-weight: bold;\r\n  padding: 0.2rem;\r\n  color: rgb(255, 255, 255);\r\n  margin-top: 0.2rem;\r\n}\r\n\r\n.side-nav-item[_ngcontent-%COMP%]:hover {\r\n  background-color: rgb(190, 187, 187);\r\n}\r\n\r\n.side-nav-item[_ngcontent-%COMP%]:hover {\r\n  color: rgb(78, 76, 76) !important;\r\n}\r\n\r\n.show[_ngcontent-%COMP%] {\r\n  transform: translateX(0%);\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  width: 60px;\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n  img[_ngcontent-%COMP%] {\r\n    width: 50px !important;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGUtbmF2LWNvbnRlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlDQUFpQztFQUNqQyxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBQ0E7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtFQUN4QjtBQUNGIiwiZmlsZSI6InNpZGUtbmF2LWNvbnRlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlLW5hdi1pdGVtIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzgsIDc2LCA3Nik7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogMC4ycmVtO1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgbWFyZ2luLXRvcDogMC4ycmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNpZGUtbmF2LWl0ZW0gYSB7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxufVxyXG4uc2lkZS1uYXYtaXRlbTpmaXJzdC1vZi10eXBlIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbi1wYXJhbXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3OCwgNzYsIDc2KTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiAwLjJyZW07XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBtYXJnaW4tdG9wOiAwLjJyZW07XHJcbn1cclxuXHJcbi5zaWRlLW5hdi1pdGVtOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkwLCAxODcsIDE4Nyk7XHJcbn1cclxuLnNpZGUtbmF2LWl0ZW06aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoNzgsIDc2LCA3NikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNob3cge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_new_post_add_new_post_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-new-post/add-new-post.component */ "1Dzb");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.guard */ "tIkO");
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comments/comments.component */ "f1Oy");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _my_memes_my_memes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-memes/my-memes.component */ "8WXK");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./not-found/not-found.component */ "nod/");
/* harmony import */ var _posts_ilike_posts_ilike_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./posts-ilike/posts-ilike.component */ "o5Ft");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signin/signin.component */ "/hi3");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _single_comment_preview_single_comment_preview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./single-comment-preview/single-comment-preview.component */ "AuWd");
/* harmony import */ var _single_post_page_single_post_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./single-post-page/single-post-page.component */ "qmjx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");














const routes = [
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"] },
    { path: 'signin', component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_8__["SigninComponent"] },
    {
        path: 'post/:id',
        component: _single_post_page_single_post_page_component__WEBPACK_IMPORTED_MODULE_11__["SinglePostPageComponent"],
        children: [
            { path: '', component: _comments_comments_component__WEBPACK_IMPORTED_MODULE_3__["CommentsComponent"] },
            { path: 'comment/:id', component: _single_comment_preview_single_comment_preview_component__WEBPACK_IMPORTED_MODULE_10__["SingleCommentPreviewComponent"] },
        ],
    },
    { path: 'new', component: _add_new_post_add_new_post_component__WEBPACK_IMPORTED_MODULE_1__["AddNewPostComponent"] },
    { path: 'liked', component: _posts_ilike_posts_ilike_component__WEBPACK_IMPORTED_MODULE_7__["PostsILikeComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'mymemes', component: _my_memes_my_memes_component__WEBPACK_IMPORTED_MODULE_5__["MyMemesComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map