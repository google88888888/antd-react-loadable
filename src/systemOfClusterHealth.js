
import React from 'react';


// import {i18nde} from "../../../i18n/components/reportingCtl/nls/de/systemOfClusterHealth";
// import {i18nes} from "../../../i18n/components/reportingCtl/nls/es/systemOfClusterHealth";
// import {i18nfr} from "../../../i18n/components/reportingCtl/nls/fr/systemOfClusterHealth";
// import {i18nit} from "../../../i18n/components/reportingCtl/nls/it/systemOfClusterHealth";
// import {i18nja} from "../../../i18n/components/reportingCtl/nls/ja/systemOfClusterHealth";
// import {i18nko} from "../../../i18n/components/reportingCtl/nls/ko/systemOfClusterHealth";
// import {i18npt} from "../../../i18n/components/reportingCtl/nls/pt/systemOfClusterHealth";
// import {i18nzh} from "../../../i18n/components/reportingCtl/nls/zh/systemOfClusterHealth";
// import {i18n} from "../../../i18n/components/reportingCtl/nls/systemOfClusterHealth";

const {
    Component
} = React;


class systemOfClusterHealth extends Component {
    constructor(props){
        super(props);
        this.state = {
            i18n:{},
            loading:false,

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
        const {loading} = this.state;
        let self=this;
        return(

            <div className="global-div-systemOfClusterHealth"
                id="global-div-systemOfClusterHealth-id"
            >
55555555
            </div>


        )
    }
}

export default systemOfClusterHealth;