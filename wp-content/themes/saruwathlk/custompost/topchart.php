<?php
add_action('init', 'topchart');

function topchart()
{
    register_post_type('topchart', array(
        'labels' => array(
            'name' => __('Top Chart'),
            'singular_name' => __('topchart'),

        ),

        'public' => true,
        'has_archive' => true,
        'menu_position' => 4,
        'rewrite' => array('slug' => 'topchart'),
        'show_ui' => true,




        'supports' => array('title', 'thumbnail'),


    ));


}




add_action('add_meta_boxes', 'topchart_meta_box');
// Save your meta box content
add_action('save_post', 'topchart_data');

// Add a custom meta box to a post
function topchart_meta_box($post)
{

    add_meta_box(
        'topchart Meta Details', // ID, should be a string
        'Upload Topchart Song Details Here', // Meta Box Title
        'topchart_meta_box_content', // Your call back function, this is where your form field will go
        'topchart', // The post type you want this to show up on, can be post, page, or custom post type
        'normal', // The placement of your meta box, can be normal or side
        'high' // The priority in which this will be displayed
    );
}

function topchart_data($post_id)
{

    $is_autosave = wp_is_post_autosave($post_id);
    $is_revision = wp_is_post_revision($post_id);
    $is_valid_nonce = (isset($_POST['prfx_homepage']) && wp_verify_nonce($_POST['prfx_homepage'], basename(__FILE__))) ? 'true' : 'false';

    // Exits script depending on save status
    if ($is_autosave || $is_revision || !$is_valid_nonce) {
        return;
    }


    if (isset($_POST['songnum'])) {
        update_post_meta($post_id, 'songnum', sanitize_text_field($_POST['songnum']));
    }

    if (isset($_POST['artist_name'])) {
        update_post_meta($post_id, 'artist_name', sanitize_text_field($_POST['artist_name']));
    }

    if (isset($_POST['youtube_link'])) {
        update_post_meta($post_id, 'youtube_link', sanitize_text_field($_POST['youtube_link']));
    }



}

function topchart_meta_box_content($post)
{
    wp_nonce_field(basename(__FILE__), 'prfx_homepage');
    $prfx_stored_meta = get_post_meta($post->ID);
    ?>


    <p>
        <label for="songnum" class="prfx-row-title"><?php _e('Song Number', 'prfx-textdomain') ?></label>
        <input style="width:  100%" type="text" name="songnum" placeholder="1" id="sub-title"
               value="<?php if (isset($prfx_stored_meta['songnum'])) echo $prfx_stored_meta['songnum'][0]; ?>"/>
    </p>



    <p>
        <label for="artist_name" class="prfx-row-title"><?php _e('Artist Name', 'prfx-textdomain') ?></label>
        <input style="width: 100%" type="text" name="artist_name" placeholder="Michael Jackson"  id="sub-title"
               value="<?php if (isset($prfx_stored_meta['artist_name'])) echo $prfx_stored_meta['artist_name'][0]; ?>"/>
    </p>


    <p>
        <label for="youtube_link" class="prfx-row-title"><?php _e('YouTube Link', 'prfx-textdomain') ?></label>
        <input style="width: 100%" type="url" name="youtube_link" placeholder="https://www.youtube.com/watch?v=" id="sub-title"
               value="<?php if (isset($prfx_stored_meta['youtube_link'])) echo $prfx_stored_meta['youtube_link'][0]; ?>"/>
    </p>


    <?php
}

