$(document).ready(function () {
    // Hide all content initially
    $('.ddbox, .slideshow-container, .overlay').hide();

    // Utility function to handle visibility toggling for ddbox sections
    function toggleSection(buttonClass, sectionId) {
        $(buttonClass).click(function (e) {
            e.preventDefault();

            // Hide all sections first
            $('.ddbox').hide().attr('aria-expanded', 'false');

            // Toggle visibility of the selected section
            $(sectionId).fadeToggle().attr('aria-expanded', function (_, attr) {
                return attr === 'true' ? 'false' : 'true';
            });
        });
    }

    // Assign toggle functionality to each button for sections
    toggleSection('.botproj', '#divproj');
    toggleSection('.botover', '#divover');
    toggleSection('.botcont', '#divcont');
    toggleSection('.botetc', '#divetc');

    // Utility function to handle slideshow visibility and overlay
    function toggleSlideshow(buttonClass, slideshowId) {
        $(buttonClass).click(function (e) {
            e.preventDefault();

            // Check if the slideshow is currently visible
            const isVisible = $(slideshowId).is(':visible');

            // Hide the slideshow and overlay if it's open
            $('.slideshow-container, .overlay').fadeOut();

            // If not visible, show the slideshow and overlay
            if (!isVisible) {
                $(slideshowId).fadeIn();
                $('.overlay').fadeIn();
            }
        });
    }

    // Assign toggle functionality to the random slideshow button
    toggleSlideshow('.botrandom', '#randomshow');

    // Close slideshow and overlay when the close button is clicked
    $('.closebtn').click(function () {
        $('.slideshow-container, .overlay').fadeOut();
    });
});
