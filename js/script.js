
/**             ---- DOLLAR_SYMBOL_($) ----
 * $:   The "dollar" symbol is an identifier used to access
 * JQuery. 
 * document:    After the dollar symbol in between the paranthesis 
 * is the selector which defines what element should be targeted.
 * In this case the selector is a document which targets the entire
 * HTML document. 
 *ready:     Next the "ready" event specifies that the document
 * should finish floating and be ready before the code is executed.
 * function:    The "function" keyword is passed-in as an argument 
 * to tell the browser to run the code that will be between the 
 * "curly braces" ( {} ).
 */
$( document ).ready( function() {

    /**                 ---- SHINELOOP_FUNCTION ----
     * The "shineLoop" function uses the chaining technique to utilize
     * multiple animate event methods in the same function.
     * 
     * In this function I will use the "JQuery" .animate method to 
     * perform a custom animation.
     * Here, I'm targeting any HTML element that has the CSS class ".shine".
     * And then using the "animate" method to modify the "CSS" property
     * "backgroundPositionX". The backgroundPositionX property sets the 
     * position of the background image along the "X-axis" horizonyally.
     * In this case it's moving at 1600px along the "X-axis". "3000", 
     * represents the duration of the animation in milliseconds (3 sec ).
     * 
     * NOTE: I am calling on the animate method again. This is called 
     * chaining. In "JQuery" chaining let's you use multiple event 
     * methods one after the other. without the need to create a "new" 
     * function for each. So by "chaining the animate methods" I am able to 
     * move the position of the background images to the opposite direction
     * by using "-800px".
     */
    function shineLoop() 
    {
        $( ".shine" ).animate( { backgroundPositionX: '1600px' }, 3000 )
        .animate( { backgroundPositionX: '-800px' }, 3000 );
    };

    /**                 ---- REPEAT_FUNCTION_(setInterval) ----
     * Now, I need to call the function making sure it repeats. To do
     * this I use the global "JS" function "steInterval(shineLoop, 0)"
     * 
     * The "setInterval" will repeat the "shineLoop" function and "0"
     * zero sets the delayed amount of time in between each repeat.
     */
    setInterval( shineLoop, 0 );

    /**
     * Shrinks header size when the document is scrolled down
     * by 50 pixels
     */
    $( document ).on( "scroll", function() 
    {
        if ( $( document ).scrollTop() > 50 )
        {
            $( "h1" ).addClass( "header-scrolled" );
        }
        else
        {
            $( "h1" ).removeClass( "header-scrolled" );
        }
    });

    $( '#classicCars' ).on( 
        {

            /**
             * Triggers the image to slide down one after the other
             * when the user's mouse enters the div area with the
             * "#classicCars" ID
             */
            mouseenter: function() 
            {
                $('#titleOne' ).show( 1000 ); 
                $('#titleTwo' ).show( 1500 ); 
                $('#titleThree' ).show( 2000 ); 
            },

            /**
             * Triggers the images to slide up and hide each title
             * one after the other when the user's mouse leaves the
             * div area with the "#classicCars" ID
             */
            mouseleave: function()
            {
                $('#titleThree' ).hide( 2000 ); 
                $('#titleTwo' ).hide( 1500 ); 
                $('#titleOne' ).hide( 1000 ); 
            }
        });

        /**
         * Creates a toggle effect on each FAQ question by checking
         * each element's sibling so they don't all display when 
         * one question is clicked
         */
        $( 'div.question' ).on( 'click', function() 
        {
            $( this ).next().slideToggle( 'slow' );
        });
})