<?php
add_action('init', 'advertise_util');

function advertise_util()
{
    register_post_type('advertise_util', array(
            'labels' => array(
                'name' => __('Advertisment'),
                'singular_name' => __('advertise_util'),

            ),
            'public' => true,
            'has_archive' => true,
            'menu_position'=>2,

            'supports' => array('title','thumbnail')
        )
    );

}



add_action('add_meta_boxes', 'advertisment_meta_box');
// Save your meta box content
add_action('save_post', 'advertisment_data');

// Add a custom meta box to a post
function advertisment_meta_box($post)
{

    add_meta_box(
        'advertise_util Meta Details', // ID, should be a string
        'Upload Your HomePage Advertisment Images Here', // Meta Box Title
        'advertisment_meta_box_content', // Your call back function, this is where your form field will go
        'advertise_util', // The post type you want this to show up on, can be post, page, or custom post type
        'normal', // The placement of your meta box, can be normal or side
        'high' // The priority in which this will be displayed
    );
}

function advertisment_data($post_id)
{

    $is_autosave = wp_is_post_autosave($post_id);
    $is_revision = wp_is_post_revision($post_id);
    $is_valid_nonce = (isset($_POST['prfx_homepage']) && wp_verify_nonce($_POST['prfx_homepage'], basename(__FILE__))) ? 'true' : 'false';

    // Exits script depending on save status
    if ($is_autosave || $is_revision || !$is_valid_nonce) {
        return;
    }


    if (isset($_POST['header_advertisment'])) {
        update_post_meta($post_id, 'header_advertisment', sanitize_text_field($_POST['header_advertisment']));
    }

    if (isset($_POST['side_advertisment_one'])) {
        update_post_meta($post_id, 'side_advertisment_one', sanitize_text_field($_POST['side_advertisment_one']));
    }

    if (isset($_POST['side_advertisment_two'])) {
        update_post_meta($post_id, 'side_advertisment_two', sanitize_text_field($_POST['side_advertisment_two']));
    }

    if (isset($_POST['side_advertisment_three'])) {
        update_post_meta($post_id, 'side_advertisment_three', sanitize_text_field($_POST['side_advertisment_three']));
    }

    
//    Slider Images
    if (isset($_POST['first_slider_image'])) {
        update_post_meta($post_id, 'first_slider_image', sanitize_text_field($_POST['first_slider_image']));
    }

    if (isset($_POST['second_slider_image'])) {
        update_post_meta($post_id, 'second_slider_image', sanitize_text_field($_POST['second_slider_image']));
    }

    if (isset($_POST['third_slider_image'])) {
        update_post_meta($post_id, 'third_slider_image', sanitize_text_field($_POST['third_slider_image']));
    }

//    Post Category Advertisment
    if (isset($_POST['first_side_advertisment'])) {
        update_post_meta($post_id, 'first_side_advertisment', sanitize_text_field($_POST['first_side_advertisment']));
    }

    if (isset($_POST['second_side_advertisment'])) {
        update_post_meta($post_id, 'second_side_advertisment', sanitize_text_field($_POST['second_side_advertisment']));
    }

    if (isset($_POST['third_side_advertisment'])) {
        update_post_meta($post_id, 'third_side_advertisment', sanitize_text_field($_POST['third_side_advertisment']));
    }


}

function advertisment_meta_box_content($post)
{
    wp_nonce_field(basename(__FILE__), 'prfx_homepage');
    $prfx_stored_meta = get_post_meta($post->ID);
    ?>


<!--Header advertisment-->

    <p>
        <label for="header_advertisment" class="prfx-row-title"><?php _e('Header Advertisment', 'prfx-textdomain') ?></label>
        <input style="width: 100%" type="url" name="header_advertisment" id="sub-title"
               value="<?php if (isset($prfx_stored_meta['header_advertisment'])) echo $prfx_stored_meta['header_advertisment'][0]; ?>"/>
    </p>


    <!--Side Advertisment-->
    <p>
        <label for="side_advertisment_one" class="prfx-row-title"><?php _e('Home Page 1st Side Advertisment', 'prfx-textdomain') ?></label>
        <input style="width: 100%" type="text" name="side_advertisment_one" id="sub-title"
               value="<?php if (isset($prfx_stored_meta['side_advertisment_one'])) echo $prfx_stored_meta['side_advertisment_one'][0]; ?>"/>
    </p>

    <p>
        <label for="side_advertisment_two" class="prfx-row-title"><?php _e('Home Page 2nd Side Advertisment', 'prfx-textdomain') ?></label>
        <input style="width: 100%" type="text" name="side_advertisment_two" id="sub-title"
               value="<?php if (isset($prfx_stored_meta['side_advertisment_two'])) echo $prfx_stored_meta['side_advertisment_two'][0]; ?>"/>
    </p>

    <p>
        <label for="side_advertisment_three" class="prfx-row-title"><?php _e('Home Page 3rd Side Advertisment', 'prfx-textdomain') ?></label>
        <input style="width: 100%" type="text" name="side_advertisment_three" id="sub-title"
               value="<?php if (isset($prfx_stored_meta['side_advertisment_three'])) echo $prfx_stored_meta['side_advertisment_three'][0]; ?>"/>
    </p>


<!--    Slider Images-->

    <p>
        <label for="first_slider_image" class="prfx-row-title"><?php _e('1st Slider Image', 'prfx-textdomain') ?></label>
        <input style="width: 100%" type="text" name="first_slider_image" id="sub-title"
               value="<?php if (isset($prfx_stored_meta['first_slider_image'])) echo $prfx_stored_meta['first_slider_image'][0]; ?>"/>
    </p>

    <p>
        <label for="second_slider_image" class="prfx-row-title"><?php _e('2nd Slider Image', 'prfx-textdomain') ?></label>
        <input style="width: 100%" type="text" name="second_slider_image" id="sub-title"
               value="<?php if (isset($prfx_stored_meta['second_slider_image'])) echo $prfx_stored_meta['second_slider_image'][0]; ?>"/>
    </p>

    <p>
        <label for="third_slider_image" class="prfx-row-title"><?php _e('3rd Slider Image', 'prfx-textdomain') ?></label>
        <input style="width: 100%" type="text" name="third_slider_image" id="sub-title"
               value="<?php if (isset($prfx_stored_meta['third_slider_image'])) echo $prfx_stored_meta['third_slider_image'][0]; ?>"/>
    </p>


<!--Category Post advertisment-->

    <p>
        <label for="first_side_advertisment" class="prfx-row-title"><?php _e('Post View First Advertisment', 'prfx-textdomain') ?></label>
        <input style="width: 100%" type="text" name="first_side_advertisment" id="sub-title"
               value="<?php if (isset($prfx_stored_meta['first_side_advertisment'])) echo $prfx_stored_meta['first_side_advertisment'][0]; ?>"/>
    </p>


    <p>
        <label for="second_side_advertisment" class="prfx-row-title"><?php _e('Post View Second Advertisment', 'prfx-textdomain') ?></label>
        <input style="width: 100%" type="text" name="second_side_advertisment" id="sub-title"
               value="<?php if (isset($prfx_stored_meta['second_side_advertisment'])) echo $prfx_stored_meta['second_side_advertisment'][0]; ?>"/>
    </p>


    <p>
        <label for="third_side_advertisment" class="prfx-row-title"><?php _e('Post View Third Advertisment', 'prfx-textdomain') ?></label>
        <input style="width: 100%" type="text" name="third_side_advertisment" id="sub-title"
               value="<?php if (isset($prfx_stored_meta['third_side_advertisment'])) echo $prfx_stored_meta['third_side_advertisment'][0]; ?>"/>
    </p>

    <?php
}




