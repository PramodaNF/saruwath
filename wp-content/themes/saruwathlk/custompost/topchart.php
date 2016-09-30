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
        'has_archive' => false,
        'menu_position' => 2,
        'rewrite' => array('slug' => 'topchart'),
        'show_ui' => true,



        'supports' => array('title', 'editor', 'thumbnail'),


    ));


}