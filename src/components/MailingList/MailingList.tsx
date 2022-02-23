import React from "react";
import InnerHTML from "dangerously-set-html-content";

import useStyles from "./MailingList.styles";

const MailingList = () => {
  const classes = useStyles();

  const songKickWidget = `<!-- Begin Mailchimp Signup Form -->
  <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7_dtp.css" rel="stylesheet" type="text/css">
  <style type="text/css">
  #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
  /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
    We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
  </style>
  <div id="mc_embed_signup">
  <form action="https://Douvelle19.us14.list-manage.com/subscribe/post?u=b60265bc4b7cc8aa648ee2bfc&amp;id=1ca969b5f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
      <div id="mc_embed_signup_scroll">
  <h2>Sign up for the latest news on releases, edits, tour dates and more.</h2>
  <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
  <div class="mc-field-group">
  <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
  </label>
  <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
  </div>
  <div class="mc-field-group">
  <label for="mce-FNAME">First Name  <span class="asterisk">*</span>
  </label>
  <input type="text" value="" name="FNAME" class="required" id="mce-FNAME">
  </div>
  <div class="mc-field-group">
  <label for="mce-LNAME">Last Name  <span class="asterisk">*</span>
  </label>
  <input type="text" value="" name="LNAME" class="required" id="mce-LNAME">
  </div>
  <div class="mc-field-group size1of2">
  <label for="mce-PHONE">Phone Number </label>
  <input type="text" name="PHONE" class="" value="" id="mce-PHONE">
  </div>
  <div id="mce-responses" class="clear foot">
  <div class="response" id="mce-error-response" style="display:none"></div>
  <div class="response" id="mce-success-response" style="display:none"></div>
  </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
      <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_b60265bc4b7cc8aa648ee2bfc_1ca969b5f0" tabindex="-1" value=""></div>
          <div class="optionalParent">
              <div class="clear foot">
                  <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
                  <p class="brandingLogo"><a href="http://eepurl.com/hVkiRn" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_light_dtp.svg"></a></p>
              </div>
          </div>
      </div>
  </form>
  </div>
  <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[4]='PHONE';ftypes[4]='phone';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
  <!--End mc_embed_signup-->`;

  return (
    <div className={classes.mailingList}>
      {/* <InnerHTML html={songKickWidget} /> */}
      <div>Mailing list</div>
    </div>
  );
};

export default MailingList;
