// tslint:disable:object-literal-key-quotes quotemark semicolon
export default {
  "title": "Trigger",
  "description": "Determines when the logic should be triggered",
  "type": "object",
  "required": ["type"],
  "properties": {
    "type": {
      "title": "Type",
      "description": "The type of the trigger.",
      "enum": ["simple", "javascript", "json", "event"]
    }
  },
  "allOf": [
    {
      "if": {
        "properties": { "type": { "const": "simple" } }
      },
      "then": {
        "required": ["simple"],
        "properties": {
          "simple": {
            "title": "Simple",
            "description": "Defines a simple trigger.",
            "required": ["when", "eq", "show"],
            "type": "object",
            "properties": {
              "when": {
                "title": "When",
                "description": "The trigger field key.",
                "type": "string"
              },
              "eq": {
                "title": "Eq",
                "description": "The value to equal.",
                "type": "string"
              },
              "show": {
                "title": "Show",
                "description": "Whether to trigger or not when the value is equal.",
                "type": "boolean"
              }
            }
          }
        }
      }
    },
    {
      "if": {
        "properties": { "type": { "const": "javascript" } }
      },
      "then": {
        "required": ["javascript"],
        "properties": {
          "javascript": {
            "title": "Javascript",
            "description": "Javascript logic.",
            "type": "string"
          }
        }
      }
    },
    {
      "if": {
        "properties": { "type": { "const": "json" } }
      },
      "then": {
        "required": ["json"],
        "properties": {
          "json": {
            "title": "Json",
            "description": "JSON Logic object that returns true or false.",
            "type": "object"
          }
        }
      }
    },
    {
      "if": {
        "properties": { "type": { "const": "event" } }
      },
      "then": {
        "required": ["event"],
        "properties": {
          "event": {
            "title": "Event",
            "description": "The name of the event that will trigger this logic.",
            "type": "string"
          }
        }
      }
    }
  ]
}
