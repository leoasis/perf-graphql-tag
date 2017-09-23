const gql = require("graphql-tag");
const start = new Date().getTime();
const frag0 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag0"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 36,
    "source": {
      "body": "fragment Frag0 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query0 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query0"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag0"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag0.definitions),
  "loc": {
    "start": 0,
    "end": 64,
    "source": {
      "body": "query Query0 { hello { one two three { four five ...Frag0 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag1 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag1"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 36,
    "source": {
      "body": "fragment Frag1 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query1 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query1"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag1"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag1.definitions),
  "loc": {
    "start": 0,
    "end": 64,
    "source": {
      "body": "query Query1 { hello { one two three { four five ...Frag1 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag2 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag2"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 36,
    "source": {
      "body": "fragment Frag2 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query2 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query2"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag2"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag2.definitions),
  "loc": {
    "start": 0,
    "end": 64,
    "source": {
      "body": "query Query2 { hello { one two three { four five ...Frag2 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag3 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag3"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 36,
    "source": {
      "body": "fragment Frag3 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query3 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query3"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag3"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag3.definitions),
  "loc": {
    "start": 0,
    "end": 64,
    "source": {
      "body": "query Query3 { hello { one two three { four five ...Frag3 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag4 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag4"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 36,
    "source": {
      "body": "fragment Frag4 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query4 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query4"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag4"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag4.definitions),
  "loc": {
    "start": 0,
    "end": 64,
    "source": {
      "body": "query Query4 { hello { one two three { four five ...Frag4 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag5 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag5"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 36,
    "source": {
      "body": "fragment Frag5 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query5 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query5"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag5"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag5.definitions),
  "loc": {
    "start": 0,
    "end": 64,
    "source": {
      "body": "query Query5 { hello { one two three { four five ...Frag5 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag6 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag6"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 36,
    "source": {
      "body": "fragment Frag6 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query6 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query6"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag6"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag6.definitions),
  "loc": {
    "start": 0,
    "end": 64,
    "source": {
      "body": "query Query6 { hello { one two three { four five ...Frag6 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag7 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag7"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 36,
    "source": {
      "body": "fragment Frag7 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query7 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query7"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag7"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag7.definitions),
  "loc": {
    "start": 0,
    "end": 64,
    "source": {
      "body": "query Query7 { hello { one two three { four five ...Frag7 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag8 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag8"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 36,
    "source": {
      "body": "fragment Frag8 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query8 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query8"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag8"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag8.definitions),
  "loc": {
    "start": 0,
    "end": 64,
    "source": {
      "body": "query Query8 { hello { one two three { four five ...Frag8 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag9 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag9"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 36,
    "source": {
      "body": "fragment Frag9 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query9 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query9"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag9"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag9.definitions),
  "loc": {
    "start": 0,
    "end": 64,
    "source": {
      "body": "query Query9 { hello { one two three { four five ...Frag9 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag10 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag10"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag10 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query10 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query10"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag10"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag10.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query10 { hello { one two three { four five ...Frag10 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag11 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag11"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag11 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query11 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query11"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag11"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag11.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query11 { hello { one two three { four five ...Frag11 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag12 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag12"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag12 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query12 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query12"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag12"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag12.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query12 { hello { one two three { four five ...Frag12 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag13 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag13"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag13 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query13 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query13"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag13"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag13.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query13 { hello { one two three { four five ...Frag13 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag14 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag14"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag14 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query14 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query14"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag14"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag14.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query14 { hello { one two three { four five ...Frag14 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag15 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag15"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag15 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query15 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query15"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag15"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag15.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query15 { hello { one two three { four five ...Frag15 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag16 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag16"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag16 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query16 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query16"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag16"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag16.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query16 { hello { one two three { four five ...Frag16 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag17 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag17"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag17 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query17 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query17"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag17"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag17.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query17 { hello { one two three { four five ...Frag17 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag18 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag18"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag18 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query18 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query18"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag18"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag18.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query18 { hello { one two three { four five ...Frag18 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag19 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag19"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag19 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query19 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query19"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag19"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag19.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query19 { hello { one two three { four five ...Frag19 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag20 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag20"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag20 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query20 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query20"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag20"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag20.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query20 { hello { one two three { four five ...Frag20 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag21 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag21"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag21 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query21 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query21"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag21"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag21.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query21 { hello { one two three { four five ...Frag21 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag22 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag22"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag22 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query22 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query22"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag22"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag22.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query22 { hello { one two three { four five ...Frag22 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag23 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag23"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag23 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query23 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query23"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag23"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag23.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query23 { hello { one two three { four five ...Frag23 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag24 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag24"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag24 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query24 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query24"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag24"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag24.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query24 { hello { one two three { four five ...Frag24 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag25 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag25"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag25 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query25 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query25"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag25"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag25.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query25 { hello { one two three { four five ...Frag25 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag26 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag26"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag26 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query26 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query26"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag26"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag26.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query26 { hello { one two three { four five ...Frag26 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag27 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag27"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag27 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query27 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query27"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag27"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag27.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query27 { hello { one two three { four five ...Frag27 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag28 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag28"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag28 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query28 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query28"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag28"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag28.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query28 { hello { one two three { four five ...Frag28 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag29 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag29"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag29 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query29 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query29"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag29"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag29.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query29 { hello { one two three { four five ...Frag29 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag30 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag30"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag30 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query30 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query30"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag30"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag30.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query30 { hello { one two three { four five ...Frag30 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag31 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag31"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag31 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query31 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query31"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag31"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag31.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query31 { hello { one two three { four five ...Frag31 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag32 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag32"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag32 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query32 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query32"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag32"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag32.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query32 { hello { one two three { four five ...Frag32 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag33 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag33"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag33 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query33 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query33"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag33"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag33.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query33 { hello { one two three { four five ...Frag33 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag34 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag34"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag34 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query34 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query34"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag34"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag34.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query34 { hello { one two three { four five ...Frag34 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag35 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag35"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag35 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query35 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query35"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag35"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag35.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query35 { hello { one two three { four five ...Frag35 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag36 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag36"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag36 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query36 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query36"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag36"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag36.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query36 { hello { one two three { four five ...Frag36 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag37 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag37"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag37 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query37 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query37"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag37"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag37.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query37 { hello { one two three { four five ...Frag37 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag38 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag38"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag38 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query38 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query38"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag38"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag38.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query38 { hello { one two three { four five ...Frag38 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag39 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag39"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag39 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query39 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query39"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag39"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag39.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query39 { hello { one two three { four five ...Frag39 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag40 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag40"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag40 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query40 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query40"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag40"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag40.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query40 { hello { one two three { four five ...Frag40 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag41 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag41"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag41 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query41 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query41"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag41"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag41.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query41 { hello { one two three { four five ...Frag41 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag42 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag42"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag42 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query42 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query42"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag42"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag42.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query42 { hello { one two three { four five ...Frag42 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag43 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag43"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag43 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query43 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query43"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag43"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag43.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query43 { hello { one two three { four five ...Frag43 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag44 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag44"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag44 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query44 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query44"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag44"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag44.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query44 { hello { one two three { four five ...Frag44 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag45 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag45"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag45 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query45 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query45"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag45"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag45.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query45 { hello { one two three { four five ...Frag45 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag46 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag46"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag46 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query46 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query46"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag46"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag46.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query46 { hello { one two three { four five ...Frag46 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag47 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag47"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag47 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query47 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query47"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag47"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag47.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query47 { hello { one two three { four five ...Frag47 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag48 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag48"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag48 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query48 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query48"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag48"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag48.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query48 { hello { one two three { four five ...Frag48 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag49 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag49"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag49 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query49 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query49"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag49"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag49.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query49 { hello { one two three { four five ...Frag49 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag50 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag50"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag50 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query50 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query50"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag50"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag50.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query50 { hello { one two three { four five ...Frag50 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag51 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag51"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag51 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query51 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query51"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag51"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag51.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query51 { hello { one two three { four five ...Frag51 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag52 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag52"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag52 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query52 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query52"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag52"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag52.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query52 { hello { one two three { four five ...Frag52 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag53 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag53"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag53 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query53 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query53"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag53"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag53.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query53 { hello { one two three { four five ...Frag53 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag54 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag54"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag54 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query54 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query54"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag54"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag54.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query54 { hello { one two three { four five ...Frag54 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag55 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag55"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag55 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query55 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query55"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag55"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag55.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query55 { hello { one two three { four five ...Frag55 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag56 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag56"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag56 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query56 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query56"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag56"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag56.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query56 { hello { one two three { four five ...Frag56 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag57 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag57"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag57 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query57 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query57"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag57"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag57.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query57 { hello { one two three { four five ...Frag57 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag58 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag58"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag58 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query58 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query58"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag58"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag58.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query58 { hello { one two three { four five ...Frag58 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag59 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag59"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag59 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query59 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query59"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag59"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag59.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query59 { hello { one two three { four five ...Frag59 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag60 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag60"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag60 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query60 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query60"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag60"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag60.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query60 { hello { one two three { four five ...Frag60 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag61 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag61"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag61 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query61 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query61"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag61"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag61.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query61 { hello { one two three { four five ...Frag61 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag62 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag62"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag62 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query62 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query62"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag62"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag62.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query62 { hello { one two three { four five ...Frag62 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag63 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag63"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag63 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query63 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query63"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag63"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag63.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query63 { hello { one two three { four five ...Frag63 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag64 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag64"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag64 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query64 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query64"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag64"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag64.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query64 { hello { one two three { four five ...Frag64 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag65 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag65"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag65 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query65 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query65"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag65"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag65.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query65 { hello { one two three { four five ...Frag65 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag66 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag66"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag66 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query66 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query66"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag66"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag66.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query66 { hello { one two three { four five ...Frag66 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag67 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag67"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag67 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query67 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query67"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag67"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag67.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query67 { hello { one two three { four five ...Frag67 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag68 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag68"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag68 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query68 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query68"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag68"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag68.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query68 { hello { one two three { four five ...Frag68 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag69 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag69"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag69 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query69 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query69"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag69"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag69.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query69 { hello { one two three { four five ...Frag69 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag70 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag70"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag70 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query70 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query70"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag70"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag70.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query70 { hello { one two three { four five ...Frag70 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag71 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag71"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag71 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query71 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query71"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag71"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag71.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query71 { hello { one two three { four five ...Frag71 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag72 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag72"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag72 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query72 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query72"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag72"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag72.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query72 { hello { one two three { four five ...Frag72 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag73 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag73"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag73 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query73 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query73"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag73"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag73.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query73 { hello { one two three { four five ...Frag73 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag74 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag74"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag74 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query74 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query74"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag74"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag74.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query74 { hello { one two three { four five ...Frag74 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag75 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag75"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag75 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query75 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query75"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag75"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag75.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query75 { hello { one two three { four five ...Frag75 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag76 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag76"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag76 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query76 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query76"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag76"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag76.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query76 { hello { one two three { four five ...Frag76 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag77 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag77"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag77 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query77 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query77"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag77"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag77.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query77 { hello { one two three { four five ...Frag77 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag78 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag78"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag78 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query78 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query78"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag78"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag78.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query78 { hello { one two three { four five ...Frag78 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag79 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag79"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag79 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query79 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query79"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag79"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag79.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query79 { hello { one two three { four five ...Frag79 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag80 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag80"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag80 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query80 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query80"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag80"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag80.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query80 { hello { one two three { four five ...Frag80 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag81 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag81"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag81 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query81 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query81"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag81"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag81.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query81 { hello { one two three { four five ...Frag81 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag82 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag82"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag82 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query82 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query82"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag82"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag82.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query82 { hello { one two three { four five ...Frag82 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag83 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag83"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag83 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query83 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query83"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag83"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag83.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query83 { hello { one two three { four five ...Frag83 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag84 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag84"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag84 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query84 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query84"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag84"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag84.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query84 { hello { one two three { four five ...Frag84 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag85 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag85"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag85 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query85 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query85"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag85"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag85.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query85 { hello { one two three { four five ...Frag85 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag86 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag86"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag86 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query86 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query86"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag86"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag86.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query86 { hello { one two three { four five ...Frag86 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag87 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag87"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag87 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query87 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query87"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag87"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag87.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query87 { hello { one two three { four five ...Frag87 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag88 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag88"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag88 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query88 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query88"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag88"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag88.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query88 { hello { one two three { four five ...Frag88 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag89 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag89"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag89 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query89 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query89"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag89"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag89.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query89 { hello { one two three { four five ...Frag89 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag90 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag90"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag90 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query90 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query90"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag90"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag90.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query90 { hello { one two three { four five ...Frag90 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag91 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag91"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag91 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query91 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query91"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag91"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag91.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query91 { hello { one two three { four five ...Frag91 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag92 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag92"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag92 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query92 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query92"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag92"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag92.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query92 { hello { one two three { four five ...Frag92 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag93 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag93"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag93 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query93 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query93"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag93"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag93.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query93 { hello { one two three { four five ...Frag93 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag94 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag94"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag94 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query94 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query94"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag94"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag94.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query94 { hello { one two three { four five ...Frag94 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag95 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag95"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag95 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query95 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query95"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag95"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag95.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query95 { hello { one two three { four five ...Frag95 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag96 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag96"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag96 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query96 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query96"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag96"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag96.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query96 { hello { one two three { four five ...Frag96 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag97 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag97"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag97 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query97 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query97"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag97"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag97.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query97 { hello { one two three { four five ...Frag97 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag98 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag98"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag98 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query98 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query98"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag98"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag98.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query98 { hello { one two three { four five ...Frag98 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag99 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag99"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 37,
    "source": {
      "body": "fragment Frag99 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query99 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query99"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag99"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag99.definitions),
  "loc": {
    "start": 0,
    "end": 66,
    "source": {
      "body": "query Query99 { hello { one two three { four five ...Frag99 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag100 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag100"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag100 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query100 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query100"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag100"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag100.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query100 { hello { one two three { four five ...Frag100 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag101 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag101"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag101 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query101 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query101"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag101"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag101.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query101 { hello { one two three { four five ...Frag101 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag102 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag102"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag102 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query102 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query102"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag102"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag102.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query102 { hello { one two three { four five ...Frag102 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag103 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag103"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag103 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query103 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query103"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag103"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag103.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query103 { hello { one two three { four five ...Frag103 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag104 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag104"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag104 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query104 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query104"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag104"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag104.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query104 { hello { one two three { four five ...Frag104 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag105 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag105"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag105 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query105 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query105"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag105"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag105.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query105 { hello { one two three { four five ...Frag105 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag106 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag106"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag106 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query106 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query106"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag106"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag106.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query106 { hello { one two three { four five ...Frag106 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag107 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag107"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag107 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query107 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query107"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag107"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag107.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query107 { hello { one two three { four five ...Frag107 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag108 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag108"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag108 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query108 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query108"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag108"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag108.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query108 { hello { one two three { four five ...Frag108 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag109 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag109"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag109 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query109 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query109"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag109"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag109.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query109 { hello { one two three { four five ...Frag109 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag110 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag110"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag110 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query110 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query110"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag110"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag110.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query110 { hello { one two three { four five ...Frag110 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag111 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag111"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag111 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query111 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query111"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag111"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag111.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query111 { hello { one two three { four five ...Frag111 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag112 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag112"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag112 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query112 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query112"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag112"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag112.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query112 { hello { one two three { four five ...Frag112 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag113 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag113"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag113 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query113 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query113"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag113"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag113.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query113 { hello { one two three { four five ...Frag113 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag114 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag114"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag114 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query114 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query114"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag114"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag114.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query114 { hello { one two three { four five ...Frag114 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag115 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag115"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag115 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query115 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query115"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag115"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag115.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query115 { hello { one two three { four five ...Frag115 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag116 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag116"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag116 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query116 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query116"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag116"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag116.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query116 { hello { one two three { four five ...Frag116 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag117 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag117"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag117 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query117 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query117"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag117"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag117.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query117 { hello { one two three { four five ...Frag117 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag118 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag118"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag118 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query118 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query118"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag118"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag118.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query118 { hello { one two three { four five ...Frag118 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag119 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag119"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag119 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query119 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query119"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag119"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag119.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query119 { hello { one two three { four five ...Frag119 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag120 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag120"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag120 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query120 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query120"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag120"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag120.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query120 { hello { one two three { four five ...Frag120 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag121 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag121"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag121 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query121 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query121"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag121"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag121.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query121 { hello { one two three { four five ...Frag121 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag122 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag122"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag122 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query122 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query122"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag122"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag122.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query122 { hello { one two three { four five ...Frag122 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag123 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag123"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag123 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query123 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query123"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag123"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag123.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query123 { hello { one two three { four five ...Frag123 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag124 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag124"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag124 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query124 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query124"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag124"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag124.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query124 { hello { one two three { four five ...Frag124 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag125 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag125"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag125 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query125 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query125"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag125"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag125.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query125 { hello { one two three { four five ...Frag125 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag126 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag126"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag126 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query126 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query126"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag126"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag126.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query126 { hello { one two three { four five ...Frag126 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag127 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag127"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag127 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query127 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query127"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag127"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag127.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query127 { hello { one two three { four five ...Frag127 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag128 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag128"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag128 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query128 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query128"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag128"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag128.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query128 { hello { one two three { four five ...Frag128 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag129 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag129"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag129 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query129 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query129"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag129"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag129.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query129 { hello { one two three { four five ...Frag129 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag130 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag130"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag130 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query130 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query130"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag130"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag130.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query130 { hello { one two three { four five ...Frag130 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag131 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag131"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag131 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query131 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query131"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag131"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag131.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query131 { hello { one two three { four five ...Frag131 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag132 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag132"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag132 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query132 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query132"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag132"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag132.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query132 { hello { one two three { four five ...Frag132 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag133 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag133"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag133 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query133 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query133"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag133"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag133.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query133 { hello { one two three { four five ...Frag133 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag134 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag134"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag134 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query134 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query134"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag134"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag134.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query134 { hello { one two three { four five ...Frag134 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag135 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag135"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag135 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query135 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query135"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag135"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag135.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query135 { hello { one two three { four five ...Frag135 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag136 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag136"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag136 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query136 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query136"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag136"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag136.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query136 { hello { one two three { four five ...Frag136 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag137 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag137"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag137 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query137 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query137"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag137"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag137.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query137 { hello { one two three { four five ...Frag137 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag138 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag138"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag138 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query138 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query138"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag138"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag138.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query138 { hello { one two three { four five ...Frag138 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag139 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag139"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag139 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query139 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query139"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag139"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag139.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query139 { hello { one two three { four five ...Frag139 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag140 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag140"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag140 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query140 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query140"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag140"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag140.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query140 { hello { one two three { four five ...Frag140 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag141 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag141"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag141 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query141 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query141"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag141"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag141.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query141 { hello { one two three { four five ...Frag141 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag142 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag142"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag142 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query142 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query142"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag142"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag142.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query142 { hello { one two three { four five ...Frag142 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag143 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag143"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag143 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query143 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query143"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag143"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag143.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query143 { hello { one two three { four five ...Frag143 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag144 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag144"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag144 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query144 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query144"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag144"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag144.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query144 { hello { one two three { four five ...Frag144 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag145 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag145"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag145 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query145 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query145"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag145"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag145.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query145 { hello { one two three { four five ...Frag145 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag146 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag146"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag146 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query146 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query146"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag146"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag146.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query146 { hello { one two three { four five ...Frag146 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag147 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag147"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag147 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query147 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query147"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag147"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag147.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query147 { hello { one two three { four five ...Frag147 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag148 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag148"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag148 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query148 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query148"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag148"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag148.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query148 { hello { one two three { four five ...Frag148 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag149 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag149"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag149 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query149 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query149"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag149"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag149.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query149 { hello { one two three { four five ...Frag149 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag150 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag150"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag150 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query150 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query150"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag150"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag150.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query150 { hello { one two three { four five ...Frag150 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag151 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag151"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag151 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query151 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query151"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag151"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag151.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query151 { hello { one two three { four five ...Frag151 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag152 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag152"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag152 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query152 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query152"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag152"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag152.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query152 { hello { one two three { four five ...Frag152 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag153 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag153"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag153 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query153 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query153"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag153"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag153.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query153 { hello { one two three { four five ...Frag153 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag154 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag154"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag154 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query154 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query154"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag154"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag154.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query154 { hello { one two three { four five ...Frag154 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag155 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag155"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag155 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query155 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query155"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag155"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag155.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query155 { hello { one two three { four five ...Frag155 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag156 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag156"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag156 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query156 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query156"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag156"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag156.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query156 { hello { one two three { four five ...Frag156 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag157 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag157"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag157 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query157 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query157"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag157"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag157.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query157 { hello { one two three { four five ...Frag157 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag158 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag158"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag158 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query158 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query158"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag158"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag158.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query158 { hello { one two three { four five ...Frag158 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag159 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag159"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag159 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query159 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query159"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag159"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag159.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query159 { hello { one two three { four five ...Frag159 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag160 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag160"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag160 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query160 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query160"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag160"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag160.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query160 { hello { one two three { four five ...Frag160 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag161 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag161"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag161 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query161 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query161"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag161"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag161.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query161 { hello { one two three { four five ...Frag161 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag162 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag162"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag162 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query162 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query162"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag162"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag162.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query162 { hello { one two three { four five ...Frag162 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag163 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag163"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag163 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query163 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query163"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag163"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag163.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query163 { hello { one two three { four five ...Frag163 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag164 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag164"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag164 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query164 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query164"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag164"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag164.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query164 { hello { one two three { four five ...Frag164 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag165 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag165"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag165 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query165 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query165"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag165"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag165.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query165 { hello { one two three { four five ...Frag165 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag166 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag166"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag166 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query166 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query166"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag166"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag166.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query166 { hello { one two three { four five ...Frag166 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag167 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag167"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag167 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query167 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query167"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag167"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag167.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query167 { hello { one two three { four five ...Frag167 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag168 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag168"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag168 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query168 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query168"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag168"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag168.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query168 { hello { one two three { four five ...Frag168 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag169 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag169"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag169 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query169 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query169"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag169"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag169.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query169 { hello { one two three { four five ...Frag169 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag170 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag170"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag170 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query170 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query170"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag170"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag170.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query170 { hello { one two three { four five ...Frag170 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag171 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag171"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag171 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query171 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query171"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag171"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag171.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query171 { hello { one two three { four five ...Frag171 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag172 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag172"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag172 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query172 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query172"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag172"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag172.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query172 { hello { one two three { four five ...Frag172 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag173 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag173"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag173 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query173 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query173"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag173"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag173.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query173 { hello { one two three { four five ...Frag173 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag174 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag174"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag174 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query174 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query174"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag174"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag174.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query174 { hello { one two three { four five ...Frag174 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag175 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag175"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag175 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query175 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query175"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag175"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag175.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query175 { hello { one two three { four five ...Frag175 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag176 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag176"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag176 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query176 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query176"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag176"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag176.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query176 { hello { one two three { four five ...Frag176 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag177 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag177"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag177 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query177 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query177"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag177"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag177.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query177 { hello { one two three { four five ...Frag177 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag178 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag178"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag178 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query178 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query178"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag178"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag178.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query178 { hello { one two three { four five ...Frag178 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag179 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag179"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag179 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query179 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query179"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag179"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag179.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query179 { hello { one two three { four five ...Frag179 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag180 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag180"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag180 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query180 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query180"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag180"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag180.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query180 { hello { one two three { four five ...Frag180 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag181 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag181"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag181 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query181 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query181"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag181"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag181.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query181 { hello { one two three { four five ...Frag181 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag182 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag182"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag182 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query182 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query182"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag182"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag182.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query182 { hello { one two three { four five ...Frag182 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag183 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag183"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag183 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query183 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query183"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag183"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag183.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query183 { hello { one two three { four five ...Frag183 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag184 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag184"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag184 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query184 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query184"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag184"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag184.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query184 { hello { one two three { four five ...Frag184 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag185 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag185"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag185 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query185 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query185"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag185"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag185.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query185 { hello { one two three { four five ...Frag185 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag186 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag186"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag186 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query186 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query186"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag186"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag186.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query186 { hello { one two three { four five ...Frag186 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag187 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag187"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag187 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query187 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query187"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag187"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag187.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query187 { hello { one two three { four five ...Frag187 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag188 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag188"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag188 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query188 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query188"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag188"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag188.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query188 { hello { one two three { four five ...Frag188 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag189 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag189"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag189 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query189 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query189"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag189"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag189.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query189 { hello { one two three { four five ...Frag189 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag190 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag190"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag190 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query190 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query190"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag190"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag190.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query190 { hello { one two three { four five ...Frag190 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag191 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag191"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag191 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query191 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query191"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag191"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag191.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query191 { hello { one two three { four five ...Frag191 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag192 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag192"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag192 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query192 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query192"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag192"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag192.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query192 { hello { one two three { four five ...Frag192 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag193 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag193"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag193 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query193 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query193"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag193"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag193.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query193 { hello { one two three { four five ...Frag193 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag194 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag194"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag194 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query194 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query194"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag194"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag194.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query194 { hello { one two three { four five ...Frag194 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag195 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag195"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag195 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query195 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query195"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag195"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag195.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query195 { hello { one two three { four five ...Frag195 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag196 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag196"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag196 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query196 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query196"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag196"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag196.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query196 { hello { one two three { four five ...Frag196 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag197 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag197"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag197 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query197 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query197"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag197"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag197.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query197 { hello { one two three { four five ...Frag197 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag198 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag198"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag198 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query198 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query198"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag198"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag198.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query198 { hello { one two three { four five ...Frag198 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const frag199 = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "Frag199"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Three"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "five"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }, {
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "six"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": null
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 38,
    "source": {
      "body": "fragment Frag199 on Three { five six }",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const query199 = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Query199"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": null,
        "name": {
          "kind": "Name",
          "value": "hello"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "one"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "two"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": null
          }, {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "three"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "four"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "Field",
                "alias": null,
                "name": {
                  "kind": "Name",
                  "value": "five"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": null
              }, {
                "kind": "FragmentSpread",
                "name": {
                  "kind": "Name",
                  "value": "Frag199"
                },
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }].concat(frag199.definitions),
  "loc": {
    "start": 0,
    "end": 68,
    "source": {
      "body": "query Query199 { hello { one two three { four five ...Frag199 } } } ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
console.log("Total time: ", new Date().getTime() - start, "ms");console.log("(with babel)")