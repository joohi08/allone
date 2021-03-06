;(function(){
  var Form = Backbone.Form;
  Form.setTemplates({
    form: '\
      <form class="form-horizontal">{{fieldsets}}</form>\
    ',
    
    fieldset: '\
      <fieldset>\
        <legend>{{legend}}</legend>\
        {{fields}}\
      </fieldset>\
    ',
    
    field: '\
      <div class="control-group field-{{key}}">\
        <label class="control-label" for="{{id}}">{{title}}</label>\
        <div class="controls">\
          <div class="input-xlarge">{{editor}}</div>\
          <div class="help-block">{{help}}</div>\
        </div>\
      </div>\
    ',
    
    nestedField: '\
      <div class="field-{{key}}">\
        <div title="{{title}}" class="input-xlarge">{{editor}}</div>\
        <div class="help-block">{{help}}</div>\
      </div>\
    ',
    
    list: '\
      <div class="bbf-list">\
        <ul class="unstyled clearfix">{{items}}</ul>\
        <button type="button" class="btn bbf-add" data-action="add">Add</div>\
      </div>\
    ',
    
    listItem: '\
      <li class="clearfix">\
        <div class="pull-left">{{editor}}</div>\
        <button type="button" class="btn bbf-del" data-action="remove">&times;</button>\
      <li>\
    ',
    
    date: '\
      <div class="bbf-date">\
        <select data-type="date" class="bbf-date">{{dates}}</select>\
        <select data-type="month" class="bbf-month">{{months}}</select>\
        <select data-type="year" class="bbf-year">{{years}}</select>\
      </div>\
    ',
    
    dateTime: '\
      <div class="bbf-datetime">\
        <p>{{date}}</p>\
        <p>\
          <select data-type="hour" style="width: 4em">{{hours}}</select>\
          :\
          <select data-type="min" style="width: 4em">{{mins}}</select>\
        <p>\
      </div>\
    ',
    
    'list.Modal': '\
      <div class="bbf-list-modal">\
        {{summary}}\
      </div>\
    '
  }, {
    error: 'error'
  });
  
})();

