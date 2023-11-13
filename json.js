export const json = {
    "elements": [{
      "name": "date",
      "type": "text",
      "title": "Select a future date",
      "inputType": "date",
      "defaultValueExpression": "today()",
      "minValueExpression": "today()",
      "isRequired": true
    }, {
      "name": "date",
      "type": "text",
      "title": "Select a past date within 30 days before today",
      "inputType": "date",
      "minValueExpression": "today(-30)",
      "maxValueExpression": "today()",
      "isRequired": true
    }, {
      "name": "time",
      "type": "text",
      "title": "Select a time between 09:00 and 18:00",
      "inputType": "time",
      "min": "09:00",
      "max": "18:00",
      "isRequired": true
    }, {
      "name": "datetime-local",
      "type": "text",
      "title": "Select a date and time",
      "inputType": "datetime-local",
      "defaultValueExpression": "currentDate()"
    }, {
      "name": "month",
      "type": "text",
      "title": "Select a month",
      "inputType": "month"
    }, {
      "name": "week",
      "type": "text",
      "title": "Select a week",
      "inputType": "week"
    }],
    "showQuestionNumbers": false
  };