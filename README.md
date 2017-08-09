# jquery-accordian
A small jQuery Accordian plugin
Easy use, add in jQuery and jquery-accordian.js and initialize with:

$( ".accordion" ).accordion();
Note:
$( ".accordion" ) is set as div class

Accordian html:

&#60;div class="accordion panel panel-default"&#62;
		&#60;div class="panel-heading"&#62;&#60;a href="" class="panel-title"&#62;Panel 1&#60;/a&#62;&#60;/div&#62;
		&#60;div class="panel-collapse"&#62;&#60;div class="panel-body"&#62;Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.&#60;/div&#62;&#60;/div&#62;

  &#60;div class="panel-heading"&#62;&#60;a href="" class="panel-title"&#62;Panel 2&#60;/a&#62;&#60;/div&#62;
  &#60;div class="panel-collapse"&#62;&#60;div class="panel-body"&#62;Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.&#60;/div&#62;&#60;/div&#62;
&#60;/div&#62;



Extra functionality include:
Open multi tabs at the same time or seclect if you want the first panel to be open on init.
Change settings by initializing as:

$( ".accordion" ).accordion({
 multiOpen: false, 
 openFirst: true
}); 
