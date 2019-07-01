/**
 * @fileoverview gRPC-Web generated client stub for grpc_demo_go.protobuf.service.test_b
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var message_echo_pb = require('../../message/echo_pb.js')

var message_meta_pb = require('../../message/meta_pb.js')
const proto = {};
proto.grpc_demo_go = {};
proto.grpc_demo_go.protobuf = {};
proto.grpc_demo_go.protobuf.service = {};
proto.grpc_demo_go.protobuf.service.test_b = require('./test_b_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.grpc_demo_go.protobuf.service.test_b.GreeterClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.grpc_demo_go.protobuf.service.test_b.GreeterPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grpc_demo_go.protobuf.service.test_b.EchoRequest,
 *   !proto.grpc_demo_go.protobuf.service.test_b.EchoResponse>}
 */
const methodInfo_Greeter_Echo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grpc_demo_go.protobuf.service.test_b.EchoResponse,
  /** @param {!proto.grpc_demo_go.protobuf.service.test_b.EchoRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc_demo_go.protobuf.service.test_b.EchoResponse.deserializeBinary
);


/**
 * @param {!proto.grpc_demo_go.protobuf.service.test_b.EchoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grpc_demo_go.protobuf.service.test_b.EchoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grpc_demo_go.protobuf.service.test_b.EchoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grpc_demo_go.protobuf.service.test_b.GreeterClient.prototype.echo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grpc_demo_go.protobuf.service.test_b.Greeter/Echo',
      request,
      metadata || {},
      methodInfo_Greeter_Echo,
      callback);
};


/**
 * @param {!proto.grpc_demo_go.protobuf.service.test_b.EchoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grpc_demo_go.protobuf.service.test_b.EchoResponse>}
 *     A native promise that resolves to the response
 */
proto.grpc_demo_go.protobuf.service.test_b.GreeterPromiseClient.prototype.echo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/grpc_demo_go.protobuf.service.test_b.Greeter/Echo',
      request,
      metadata || {},
      methodInfo_Greeter_Echo);
};


module.exports = proto.grpc_demo_go.protobuf.service.test_b;

