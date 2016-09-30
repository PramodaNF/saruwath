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
        'menu_position' => 3,
        'rewrite' => array('slug' => 'custom_post'),
        'show_ui' => true,



        'supports' => array('title', 'editor', 'thumbnail','category'),
          

        ));


}






