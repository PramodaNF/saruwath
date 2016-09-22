<div class="container">
    <div class="page-header">
        <h1>Foreign Cinema</h1>
    </div>
</div>

<div class="container">
    <div class="row text-center">
        <?php
        $args = array(
            'posts_per_page' => 5,
            'post_type' => 'custom_post',
            'meta_key' => 'custom_post_category',
            'meta_value' => $query->query_vars['Foreign Cinema'],
            'meta_compare' => 'LIKE'
        );
        $recent_posts = wp_get_recent_posts($args, ARRAY_A);
        ?>

        <?php
        foreach ($recent_posts as $recent) {
            $i = $recent['ID'];
            ?>
            
            <div class="col-md-2 col-sm-6 hero-feature">
                <div class="thumbnail">
                    <img style="width:155px; height:150px;" src="<?php
                    $feat_image = wp_get_attachment_url(get_post_thumbnail_id($i));
                    echo $feat_image;
                    ?>" alt="">
                    <div class="caption">
                        <p style="margin-top:-2px; height:40px; overflow:hidden"><?php
                            echo $recent['post_title']
                            ?></p>
                        <p>
                            <a href="#" class="btn btn-primary">More</a>
                        </p>
                    </div>
                </div>
            </div>

            <?php
        }
        ?>

        <div class="col-md-2 col-sm-6 hero-feature">
            <div class="thumbnail">
                <img src="<?php echo get_bloginfo('stylesheet_directory'); ?>/img/PLACE-YOUR-ADVERT-HERE.gif" alt="">
                <div class="caption">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <p>
                        <a href="#" class="btn btn-primary">More</a>
                    </p>
                </div>
            </div>
        </div>


    </div>
</div>