<template>
  <div>
    <h2>demo3 Hello world</h2>
  </div>
</template>

<script>
var a = {
  _food: "fish"
};
console.log(a);
var obj = {};
var mValue = "abc";
Object.defineProperty(obj, "_name", {
  configurable: false,
  enumerable: false,
  get: function reactiveGetter() {
    return mValue;
  },
  set: function reactiveSetter(val) {
    mValue = val;
  }
});
obj._name = "rose";
console.log(obj);

export default {};
</script>

<style>
</style>