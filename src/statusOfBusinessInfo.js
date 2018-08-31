
import React from 'react';

// import {i18nde} from "../../../i18n/components/reportingCtl/nls/de/statusOfBusinessInfo";
// import {i18nes} from "../../../i18n/components/reportingCtl/nls/es/statusOfBusinessInfo";
// import {i18nfr} from "../../../i18n/components/reportingCtl/nls/fr/statusOfBusinessInfo";
// import {i18nit} from "../../../i18n/components/reportingCtl/nls/it/statusOfBusinessInfo";
// import {i18nja} from "../../../i18n/components/reportingCtl/nls/ja/statusOfBusinessInfo";
// import {i18nko} from "../../../i18n/components/reportingCtl/nls/ko/statusOfBusinessInfo";
// import {i18npt} from "../../../i18n/components/reportingCtl/nls/pt/statusOfBusinessInfo";
// import {i18nzh} from "../../../i18n/components/reportingCtl/nls/zh/statusOfBusinessInfo";
// import {i18n} from "../../../i18n/components/reportingCtl/nls/statusOfBusinessInfo";

const {
    Component
} = React;


class statusOfBusinessInfo extends Component {
    constructor(props){
        super(props);
        this.state = {


        };
    };

    componentDidMount() {
        let self=this;
        self.getRightI18n();
    }


    getRightI18n= () => {
        // let self=this;
        // let localeForLicenseInfo=window.localStorage.getItem('localeForA3');
        // let rightI18n;
        // if(localeForLicenseInfo==="de"){
        //     rightI18n=i18nde;
        // }else
        // if(localeForLicenseInfo==="es"){
        //     rightI18n=i18nes;
        // }else
        // if(localeForLicenseInfo==="fr"){
        //     rightI18n=i18nfr;
        // }else
        // if(localeForLicenseInfo==="it"){
        //     rightI18n=i18nit;
        // }else
        // if(localeForLicenseInfo==="ja"){
        //     rightI18n=i18nja;
        // }else
        // if(localeForLicenseInfo==="ko"){
        //     rightI18n=i18nko;
        // }else
        // if(localeForLicenseInfo==="pt"){
        //     rightI18n=i18npt;
        // }else
        // if(localeForLicenseInfo==="zh"){
        //     rightI18n=i18nzh;
        // }else{
        //     rightI18n=i18n;
        // }
        // self.setState({
        //     i18n : rightI18n,
        // })

    }


    render(){
        const {} = this.props;
        const {} = this.state;
        let self=this;


        return(

            <div className="global-div-statusOfBusinessInfo"
                id="global-div-statusOfBusinessInfo-id"
            >
qqqqqqqqqqqq
            </div>


        )
    }
}

export default statusOfBusinessInfo;