<div class="col-sm-4">
    <div class="row text-center ">

        <?php
        $args = array(
            'posts_per_page' => 4,
            'post_type' => 'custom_post',
            'order' => "DESC",
            'category_name' => 'hotty'
        );
        $recent_posts = wp_get_recent_posts($args, ARRAY_A);
        ?>

        <?php
        foreach ($recent_posts as $recent) {
        $i = $recent['ID'];
        ?>


        <div class="col-md-6 col-sm-6 hero-feature">
            <div class="thumbnail">
                <img style="width:161px; height:156px;" src="<?php
                $feat_image = wp_get_attachment_url(get_post_thumbnail_id($i));
                echo $feat_image;
                ?>" alt="">
                <div class="caption">
                    <p style="margin-top:-2px; height:40px; overflow:hidden"><?php
                        echo get_the_title($i);
                        ?></p>
                    <p>
                        <?php
                        echo '<a href="' . get_permalink($i) . '" class="btn btn-primary">More</a>';
                        ?>

                    </p>
                </div>
            </div>
        </div>

            <?php
        }
        ?>



    </div>
</div>