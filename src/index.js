import React, { Component } from 'react';
import _JSXStyle from 'styled-jsx/style';
import './css/cookie-bubble.css';

class cookieBubble extends Component {

    constructor(props) {
        super(props);
        this.state = {

            /** ********************************************
             * Private Settings 
             * *********************************************/
            cookieName              : 'CookieBubble',   
            cookieValue             : true,             
            isVisible               : false,            
            defaultCookieMaxAge     : 30,               
            defaultBoxAppearDelay   : 1000,             
            /** ********************************************
             * Basic Settings 
             * *********************************************/
            cb_messageText                  : this.props.messageText,              
            cb_messageTextColor             : this.props.messageTextColor,          
            cb_messageFontSize              : this.props.messageFontSize,          
            cb_buttonText                   : this.props.buttonText,                
            cb_buttonColor                  : this.props.buttonColor,               
            cb_buttonFontSize               : this.props.buttonFontSize,           
            cb_iconColor                    : this.props.iconColor,                 
            cb_iconVisibility               : this.props.iconVisibility,            
            cb_cookiePolicyButtonText       : this.props.cookiePolicyButtonText,  
            cb_cookiePolicyButtonTextColor  : this.props.cookiePolicyButtonTextColor,    
            cb_cookiePolicyButtonUrl        : this.props.cookiePolicyButtonUrl,  
            cb_cookiePolicyButtonTarget     : this.props.cookiePolicyButtonTarget,
            /***********************************************
             * Advanced Settings
             * *********************************************/
            cb_maxAge               : this.props.maxAge, 
            cb_position             : this.props.boxPosition,
            cb_boxColor             : this.props.boxColor,             
            cb_boxAppearDelay       : this.props.boxAppearDelay      

        }
        this.gotIt = this.gotIt.bind(this);
    }

    componentWillMount() {
        this.checkCookie();
    }

    gotIt() {
        this.setState(state => ({
            isVisible: !this.state.isVisible
        }));
    }

    setCookie() {
        let cookieMaxAge = this.state.cb_maxAge != undefined ? this.state.cb_maxAge : this.state.defaultCookieMaxAge;
        let d = new Date();
        d.setTime(d.getTime() + (cookieMaxAge * 24 * 60 * 60 * 1000));
        let expiration = "expires=" + d.toUTCString();
        document.cookie = this.state.cookieName + "=" + this.state.cookieValue + ";" + expiration + ";path=/";
        this.gotIt();
    }

    getCookie(cname) {
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    checkCookie() {
        let get_cookie = this.getCookie(this.state.cookieName);
        if (get_cookie != '' && get_cookie != null) {
        } else {
            setTimeout(() => {
               this.gotIt();
            }, this.state.cb_boxAppearDelay != undefined ? this.state.cb_boxAppearDelay : this.state.defaultBoxAppearDelay);
        }
    }

    render() {
    
        const Icon = (props) => {
            return (
                <div className="cb-image">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97.93 97.93" >
                        <defs>
                            <style jsx>{`
                                .cookie-inner-color {
                                    fill:${this.state.cb_iconColor} !important; 
                                }
                                `}</style>
                        </defs>
                        <g id="Layer_2" data-name="Layer 2">
                            <g id="Layer_1-2" data-name="Layer 1">
                                <path d="M44,23.76a2.47,2.47,0,1,0,.91,3.37A2.47,2.47,0,0,0,44,23.76Z" />
                                <path d="M25.9,40.32a2.47,2.47,0,0,0,0,4.93h0a2.47,2.47,0,1,0,0-4.93Z" />
                                <circle cx="32.08" cy="65.86" r="2.47" />
                                <path d="M56.38,69.91a2.47,2.47,0,1,0,1.14,1.49A2.47,2.47,0,0,0,56.38,69.91Z" />
                                <path d="M72,52.68a2.47,2.47,0,0,0-2.38,1.83,2.44,2.44,0,0,0,.25,1.87,2.47,2.47,0,0,0,4.52-.59,2.44,2.44,0,0,0-.25-1.87A2.47,2.47,0,0,0,72,52.68Z" />
                                <path className="cookie-inner-color" d="M89.51,52.86A14,14,0,0,1,81,47.2,14.09,14.09,0,0,1,61,35.68,14.09,14.09,0,0,1,49.49,15.73a14,14,0,0,1-5.66-8.55,44,44,0,0,0-21.09,6.15A44.26,44.26,0,0,0,71.46,87.08,44.24,44.24,0,0,0,89.51,52.86ZM28.28,43.42a2.47,2.47,0,0,1-2.38,1.83h0a2.47,2.47,0,1,1,2.38-1.83Zm3.8,24.9a2.47,2.47,0,1,1,2.47-2.47A2.47,2.47,0,0,1,32.08,68.32ZM44.92,27.13A2.47,2.47,0,1,1,44,23.76,2.47,2.47,0,0,1,44.92,27.13ZM57.28,73.27a2.47,2.47,0,1,1-.9-3.36,2.47,2.47,0,0,1,.9,3.36ZM74.42,55.79a2.47,2.47,0,1,1-.25-1.87A2.45,2.45,0,0,1,74.42,55.79Z" />
                                <path d="M97.93,48.52v-.2A2.35,2.35,0,0,0,95.7,46a9.37,9.37,0,0,1-8-5.45,2.35,2.35,0,0,0-3.49-.93,9.51,9.51,0,0,1-5.44,1.72A9.4,9.4,0,0,1,69.39,31.1a2.35,2.35,0,0,0-2.55-2.55c-.28,0-.57,0-.85,0a9.39,9.39,0,0,1-7.68-14.81,2.35,2.35,0,0,0-.93-3.49,9.37,9.37,0,0,1-5.45-8A2.35,2.35,0,0,0,49.61,0H49a49,49,0,1,0,49,49C97.93,48.82,97.93,48.67,97.93,48.52ZM71.46,87.08A44.26,44.26,0,0,1,22.74,13.33,44,44,0,0,1,47.53,4.72a14,14,0,0,0,5.66,8.55A14.09,14.09,0,0,0,64.71,33.22,14.09,14.09,0,0,0,84.66,44.75a14,14,0,0,0,8.56,5.66A44.3,44.3,0,0,1,71.46,87.08Z" />
                            </g>
                        </g>
                    </svg>
                </div>
            );
        }

        const Signature = (props) => {
            return (
                <div className="copyright-wrapper">
                    <a className="copyright" href="/"></a>
                </div>
            );
        }

        return (
            <div className={`cookie-bubble ${this.state.cb_position ? this.state.cb_position : 'bottom-left' } ${this.state.isVisible ? 'show' : 'hide'} `} style={{ backgroundColor: this.state.cb_boxColor }}>
                <div className="cb-wrapper">
                    <div className="cb-row">
                        {
                            this.state.cb_iconVisibility || this.state.cb_iconVisibility == undefined ? <Icon /> : ''

                        }
                        <div className="cb-row-content">
                            <span className="message" style={
                                {
                                    color: this.state.cb_messageTextColor,
                                    fontSize: this.state.cb_messageFontSize
                                }}>
                                {this.state.cb_messageText ? this.state.cb_messageText : 'We use cookies to personalize your experience. By continuing to visit this website you agree to our use of cookies.'}
                            </span>
                            <div class="cb-controls">
                                <button className="agreement-btn" onClick={(e) => (this.setCookie())} style={
                                    {
                                        backgroundColor: this.state.cb_buttonColor,
                                        fontSize: this.state.cb_buttonFontSize
                                    }}>
                                    {this.state.cb_buttonText ? this.state.cb_buttonText : 'Got it'}
                                </button>
                                <a className="cookie-policy-btn" style={{color:this.state.cb_cookiePolicyButtonTextColor ? this.state.cb_cookiePolicyButtonTextColor: ''}} href={this.state.cb_cookiePolicyButtonUrl ? this.state.cb_cookiePolicyButtonUrl : 'http://allaboutcookies.org/'} target={this.state.cb_cookiePolicyButtonTarget ? this.state.cb_cookiePolicyButtonTarget : '_blank'}>
                                    {
                                        this.state.cb_cookiePolicyButtonText ? this.state.cb_cookiePolicyButtonText : 'Read our cookie policy.'
                                    }
                                </a>                            
                            </div>
                        </div>
                    </div>
                    <Signature />
                </div>

            </div>
        );
    }

}

export default cookieBubble;

