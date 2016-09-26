<?php
add_action('init', 'custom_post');

function custom_post()
{
    register_post_type('custom_post', array(
        'labels' => array(
            'name' => __('Custom Post'),
            'singular_name' => __('custom_post'),

        ),

        'public' => true,
        'has_archive' => false,
        'menu_position' => 2,
        'rewrite' => array('slug' => 'custom_post'),
        'show_ui' => true,



        'supports' => array('title', 'editor', 'thumbnail'),
          

        ));


}



//add_filter( 'single_template', 'wpd_post_type_template' ) ;

add_action('add_meta_boxes', 'custom_post_meta_box');



// Add a custom meta box to a post
function custom_post_meta_box($post)
{

    add_meta_box(
        'custom_post Meta Details', // ID, should be a string
        'Select Post Category', // Meta Box Title
        'custom_post_meta_box_content', // Your call back function, this is where your form field will go
        'custom_post', // The post type you want this to show up on, can be post, page, or custom post type
        'side', // The placement of your meta box, can be normal or side
        'high' // The priority in which this will be displayed
    );
}

// Save your meta box content
add_action('save_post', 'custom_post_data');
function custom_post_data($post_id)
{

    $is_autosave = wp_is_post_autosave($post_id);
    $is_revision = wp_is_post_revision($post_id);
    $is_valid_nonce = (isset($_POST['prfx_homepage']) && wp_verify_nonce($_POST['prfx_homepage'], basename(__FILE__))) ? 'true' : 'false';

    // Exits script depending on save status
    if ($is_autosave || $is_revision || !$is_valid_nonce) {
        return;
    }


    //accepted values whitelist
    $allowed = array('foreign','gallary','hotty','young');

    if( isset( $_POST['custom_post_category'] ) )
        update_post_meta( $post_id, 'custom_post_category', esc_attr( $_POST['custom_post_category'] ) );




}



function custom_post_meta_box_content($post)
{
    wp_nonce_field(basename(__FILE__), 'prfx_homepage');
    $selected = get_post_meta($post->ID);
    ?>


    <!--Category custom_post-->

    <p>
        <label for="custom_post_category">Color</label>
        <select name="custom_post_category" id="custom_post_category">
            <option value="foreign" <?php selected( $selected, 'foreign' ); ?>>Foreign</option>
            <option value="gallery" <?php selected( $selected, 'gallery' ); ?>>Gallery</option>
            <option value="young" <?php selected( $selected, 'young' ); ?>>Young</option>
            <option value="hotty" <?php selected( $selected, 'hotty' ); ?>>Hotty</option>
        </select>
    </p>

    <?php
}









