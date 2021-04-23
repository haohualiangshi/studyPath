$(function() {
  //   $("#div1")
  //     .velocity({ "font-size": "50px", "background-color": "yellow" })
  //     .velocity("stop")
  //     .velocity({ "text-align": "center" });
  // $("#div1,#div2").velocity({
  //         opacity: 0
  //     }, {
  //         /* Log all the animated elements. */
  //         begin: function(elements, activeCall) {
  //             console.log(" elements:", elements);
  //             console.log("activeCall:",activeCall);
  //         }
  //     });

  //   $("#div1,#div2").velocity(
  //     {
  //       height: ["10em", "5em"]
  //     },
  //     {
  //       loop: 4,
  //       /* Wait 100ms before each direction. */
  //       delay: 800
  //     }
  //   );

  $("#div1,#div2").velocity(
    {
      height: ["10em", "5em"]
    },
    {
      duration: 5000,
      /* Start the animation at 40%, and only run for a total of 600ms. */
      delay: -1800
    }
  );
});
