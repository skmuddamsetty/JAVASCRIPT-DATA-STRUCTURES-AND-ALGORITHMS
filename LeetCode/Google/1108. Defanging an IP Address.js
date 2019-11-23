/**
 * @author Santhosh Kumar Muddamsetty
 * @param {string} address
 * @return {string}
 * Given a valid (IPv4) IP address, return a defanged version of that IP    * address.
 *
 * A defanged IP address replaces every period "." with "[.]".
 *
 * https://leetcode.com/problems/defanging-an-ip-address/
 */
defangIPaddr = address => {
  return address.replace(/[.]/g, '[.]');
  return address.split('.').join('[.]');
};

console.log(defangIPaddr('1.1.1.1'));
