# jquery-accordian
A small jQuery Accordian plugin
Easy use, add in jQuery and jquery-accordian.js and initialize with:

$( ".accordion" ).accordion();
Note:
$( ".accordion" ) is set as div class

Accordian html:
<div class="accordion panel panel-default">
		<div class="panel-heading"><a href="" class="panel-title">Panel 1</a></div>
		<div class="panel-collapse"><div class="panel-body">Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.</div></div>

  <div class="panel-heading"><a href="" class="panel-title">Panel 2</a></div>
  <div class="panel-collapse"><div class="panel-body">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</div></div>

  <div class="panel-heading"><a href="" class="panel-title">Panel 3</a></div>
  <div class="panel-collapse"><div class="panel-body">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</div></div>
  </div>
</div>


Extra functionality include:
Open multi tabs at the same time or seclect if you want the first panel to be open on init.
Change settings by initializing as:

$( ".accordion" ).accordion({
 multiOpen: false, 
 openFirst: true
}); 
