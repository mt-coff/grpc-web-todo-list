/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
goog.provide('proto.todoList.AddTodoRequest');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.google.protobuf.Timestamp');


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
proto.todoList.AddTodoRequest.prototype.toObject = function(opt_includeInstance) {
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
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    detail: jspb.Message.getFieldWithDefault(msg, 2, ""),
    deadline: (f = msg.getDeadline()) && proto.google.protobuf.Timestamp.toObject(includeInstance, f)
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
  var msg = new proto.todoList.AddTodoRequest;
  return proto.todoList.AddTodoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.todoList.AddTodoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.todoList.AddTodoRequest}
 */
proto.todoList.AddTodoRequest.deserializeBinaryFromReader = function(msg, reader) {
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
    case 3:
      var value = new proto.google.protobuf.Timestamp;
      reader.readMessage(value,proto.google.protobuf.Timestamp.deserializeBinaryFromReader);
      msg.setDeadline(value);
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
proto.todoList.AddTodoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDetail();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDeadline();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.google.protobuf.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.todoList.AddTodoRequest.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
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
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.todoList.AddTodoRequest.prototype.setDetail = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp deadline = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.todoList.AddTodoRequest.prototype.getDeadline = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.Timestamp, 3));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.todoList.AddTodoRequest.prototype.setDeadline = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.todoList.AddTodoRequest.prototype.clearDeadline = function() {
  this.setDeadline(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.todoList.AddTodoRequest.prototype.hasDeadline = function() {
  return jspb.Message.getField(this, 3) != null;
};


