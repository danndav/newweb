/*
  ads.js v0.1
    by M@ McCray
    (http://www.zoodotcom.com)

  Supplies functions for cleaning up your page and reducing the number of JS requests and document.write calls when using Project Wonderful.
  
  Usage:

   Ads.ProjectWonderful( id, type[, fgcolor, bgcolor] );
   
   // Or
   
   Ads.Google( client, slot, width, height );

  Note: This should be used to replace the 'config' settings script block. Also, the following ad display script tag should be removed.

  Google Adsense example, before:
  
    <script type="text/javascript"><!--
    google_ad_client = "pub-#####";
    / * ZdC Header - 728x90, created 12/9/09 * /
    google_ad_slot = "####";
    google_ad_width = 728;
    google_ad_height = 90;
    //-->
    </script>
    <script type="text/javascript"
    src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
    </script>
  
  After:

    <script type="text/javascript"><!--
      / * ZdC Header - 728x90, created 12/9/09 * /
      Ads.Google("pub-####", "####", 728, 90);
    //-->
    </script>

*/
var Ads = (function(w){
  // Helper Functions
  function querystring(v){
    var qs = w.location.search.substring(1);
    var vars=qs.split("&");
    for(var i=0;i<vars.length;i++){
      var kv = vars[i].split("=");
      if(kv[0] == v){
        return kv[1];
      };
    };
    return '';
  };
  // Public API
  return {
    Google: function(client, slot, width, height) {
      w.google_ad_client = client;
      w.google_ad_slot = slot;
      w.google_ad_width = width;
      w.google_ad_height = height;
      document.write('<scr'+'ipt src="http://pagead2.googlesyndication.com/pagead/show_ads.js"></scr'+'ipt>');
    },
    ProjectWonderful: function(id, type, fcolor, bcolor) {
      var d  = document,
          r  = new String(Math.random()*9999).substr(0,5),
          s  = '<scr'+'ipt src="http://www.projectwonderful.com/gen.php?',
          hl = querystring('pw_highlight_code');
      
      s += 'id='+ id +'&';
      s += 'type='+ type +'&';
      s += 'r='+ r +'&';
      
      if(d.referrer){
        s += 'referer='+ escape(d.referrer) +'&';
      };
      if(d.location){
        s += 'location='+ escape(d.location); +'&';
      };
      if(fcolor){
        s += 'fg='+ fcolor +'&';
      };
      if(bcolor){
        s += 'bg='+ escape(bcolor) +'&';
      };
      if(hl!=''){
        s +="hl="+ escape(hl.match(/[0-9]+/g));
      };
      s += '"></sc'+'ript>';
      d.write(s);
    }
  };
})(this);