import React, { Component } from 'react'
import "./Footer.css";

class Footer extends Component{
    render(){
        return(
            <div className="Footer">
                <Footer>
                <div className="link-1">
                        <a href="https://about.google/?utm_source=google-IR&utm_medium=referral&utm_campaign=hp-footer&fg=1">About</a>
                        <a href="https://ads.google.com/intl/en_ir/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">Advertising</a>
                        <a href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1#?modal_active=none">Business</a>
                        <a href="https://www.google.com/search/howsearchworks/?fg=1">How Search works</a>
                    </div>
                    <div class="link-2">
                        <a href="https://policies.google.com/privacy?hl=en-IR&fg=1">Privacy</a>
                        <a href="https://policies.google.com/terms?hl=en-IR&fg=1">Term</a>
                        <a href="#">Settings</a>

                    </div>

                </Footer>
            </div>
        )
    }
}
export default Footer