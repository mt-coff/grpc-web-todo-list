/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_Empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.exportSymbol('proto.todoList.AddTodoRequest', null, global);
goog.exportSymbol('proto.todoList.GetTodoRequest', null, global);
goog.exportSymbol('proto.todoList.Todo', null, global);
goog.exportSymbol('proto.todoList.TodoListResponse', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.todoList.TodoListResponse = function(opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.todoList.TodoListResponse.repeatedFields_,
    null
  );
};
goog.inherits(proto.todoList.TodoListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.todoList.TodoListResponse.displayName =
    'proto.todoList.TodoListResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.todoList.TodoListResponse.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.todoList.TodoListResponse.prototype.toObject = function(
    opt_includeInstance
  ) {
    return proto.todoList.TodoListResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.todoList.TodoListResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.todoList.TodoListResponse.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        todoList: jspb.Message.toObjectList(
          msg.getTodoList(),
          proto.todoList.Todo.toObject,
          includeInstance
        )
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.todoList.TodoListResponse}
 */
proto.todoList.TodoListResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.todoList.TodoListResponse();
  return proto.todoList.TodoListResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.todoList.TodoListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.todoList.TodoListResponse}
 */
proto.todoList.TodoListResponse.deserializeBinaryFromReader = function(
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.todoList.Todo();
        reader.readMessage(
          value,
          proto.todoList.Todo.deserializeBinaryFromReader
        );
        msg.addTodo(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.todoList.TodoListResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.todoList.TodoListResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.todoList.TodoListResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.todoList.TodoListResponse.serializeBinaryToWriter = function(
  message,
  writer
) {
  var f = undefined;
  f = message.getTodoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.todoList.Todo.serializeBinaryToWriter
    );
  }
};

/**
 * repeated Todo todo = 1;
 * @return {!Array<!proto.todoList.Todo>}
 */
proto.todoList.TodoListResponse.prototype.getTodoList = function() {
  return /** @type{!Array<!proto.todoList.Todo>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto.todoList.Todo,
    1
  ));
};

/** @param {!Array<!proto.todoList.Todo>} value */
proto.todoList.TodoListResponse.prototype.setTodoList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.todoList.Todo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.todoList.Todo}
 */
proto.todoList.TodoListResponse.prototype.addTodo = function(
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    1,
    opt_value,
    proto.todoList.Todo,
    opt_index
  );
};

proto.todoList.TodoListResponse.prototype.clearTodoList = function() {
  this.setTodoList([]);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.todoList.Todo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.todoList.Todo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.todoList.Todo.displayName = 'proto.todoList.Todo';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.todoList.Todo.prototype.toObject = function(opt_includeInstance) {
    return proto.todoList.Todo.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.todoList.Todo} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.todoList.Todo.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        id: jspb.Message.getFieldWithDefault(msg, 1, ''),
        title: jspb.Message.getFieldWithDefault(msg, 2, ''),
        detail: jspb.Message.getFieldWithDefault(msg, 3, '')
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.todoList.Todo}
 */
proto.todoList.Todo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.todoList.Todo();
  return proto.todoList.Todo.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.todoList.Todo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.todoList.Todo}
 */
proto.todoList.Todo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setId(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setTitle(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setDetail(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.todoList.Todo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.todoList.Todo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.todoList.Todo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.todoList.Todo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getDetail();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.todoList.Todo.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/** @param {string} value */
proto.todoList.Todo.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string title = 2;
 * @return {string}
 */
proto.todoList.Todo.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/** @param {string} value */
proto.todoList.Todo.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string detail = 3;
 * @return {string}
 */
proto.todoList.Todo.prototype.getDetail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/** @param {string} value */
proto.todoList.Todo.prototype.setDetail = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.todoList.GetTodoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.todoList.GetTodoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.todoList.GetTodoRequest.displayName = 'proto.todoList.GetTodoRequest';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.todoList.GetTodoRequest.prototype.toObject = function(
    opt_includeInstance
  ) {
    return proto.todoList.GetTodoRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.todoList.GetTodoRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.todoList.GetTodoRequest.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        id: jspb.Message.getFieldWithDefault(msg, 1, '')
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.todoList.GetTodoRequest}
 */
proto.todoList.GetTodoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.todoList.GetTodoRequest();
  return proto.todoList.GetTodoRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.todoList.GetTodoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.todoList.GetTodoRequest}
 */
proto.todoList.GetTodoRequest.deserializeBinaryFromReader = function(
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setId(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.todoList.GetTodoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.todoList.GetTodoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.todoList.GetTodoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.todoList.GetTodoRequest.serializeBinaryToWriter = function(
  message,
  writer
) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.todoList.GetTodoRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/** @param {string} value */
proto.todoList.GetTodoRequest.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.todoList.AddTodoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.todoList.AddTodoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.todoList.AddTodoRequest.displayName = 'proto.todoList.AddTodoRequest';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.todoList.AddTodoRequest.prototype.toObject = function(
    opt_includeInstance
  ) {
    return proto.todoList.AddTodoRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.todoList.AddTodoRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.todoList.AddTodoRequest.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        title: jspb.Message.getFieldWithDefault(msg, 1, ''),
        detail: jspb.Message.getFieldWithDefault(msg, 2, '')
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.todoList.AddTodoRequest}
 */
proto.todoList.AddTodoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.todoList.AddTodoRequest();
  return proto.todoList.AddTodoRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.todoList.AddTodoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.todoList.AddTodoRequest}
 */
proto.todoList.AddTodoRequest.deserializeBinaryFromReader = function(
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setTitle(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setDetail(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.todoList.AddTodoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.todoList.AddTodoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.todoList.AddTodoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.todoList.AddTodoRequest.serializeBinaryToWriter = function(
  message,
  writer
) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getDetail();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

/**
 * optional string title = 1;
 * @return {string}
 */
proto.todoList.AddTodoRequest.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/** @param {string} value */
proto.todoList.AddTodoRequest.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string detail = 2;
 * @return {string}
 */
proto.todoList.AddTodoRequest.prototype.getDetail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/** @param {string} value */
proto.todoList.AddTodoRequest.prototype.setDetail = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};

goog.object.extend(exports, proto.todoList);
