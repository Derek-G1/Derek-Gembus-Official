const React = require('react');
const Icon = (props) => React.createElement('svg', { ...props });
module.exports = new Proxy({}, { get: () => Icon });