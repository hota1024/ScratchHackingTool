var Loading = {
  file: function(){
    $('#loading_file').parent().parent().fadeIn(300);
    return $('#loading_file');
  },
  project: function(){
    $('#loading_project').parent().parent().fadeIn(300);
    return $('#loading_project');
  },
  functionsOutput: function(){
    $('#loading_output_functions').parent().parent().fadeIn(300);
    return $('#loading_output_functions');
  }
}

$('#project_json').on('change',function(evt){
  $('#project_json_denger').removeClass('hide').hide();
   var files = evt.target.files;
   var file = files[0];
   if(file.type != 'application/json'){
     $('#project_json_denger').fadeIn(300);
     return;
   }

   $(this).parent().parent().parent().hide(1000);

   Loading.file();


  reader = new FileReader();
  reader.onprogress = function(e){
    Loading.file().css('width',e.loaded / e.total * 100 + '%');
    Loading.file().text('Loading file...(' + e.loaded / e.total * 100 + '%)');
  }
  reader.onload = function(){
    Loading.file().css('width','100%');
    Loading.file().text('Loaded file!(100%)');
    setTimeout(project_load,500);
  }
  reader.readAsBinaryString(file);
});

function project_load(){
  json = JSON.parse(reader.result);
  functions = [];
  Loading.project();
  var children = json.children;
  children.forEach(function(child,cindex){
    child.scripts.forEach(function(script,sindex,t){
      var parcent = (sindex + 1) / t.length;
      parcent = ((cindex + 1) * parcent) / children.length * 100;

      if(script[2][0][0] == "procDef") functions.push(script[2][0]);

      Loading.project().css('width',parcent + '%');
      Loading.project().text('Getting functions...('+parcent+'%)');
    });
  });
  Loading.project().text('Geted function!(100%)');
  setTimeout(functions_output,500);
}

function functions_output(){
  //TODO scratchblocks.renderMatching('#');
}




























//
