<div class="container" style="background-color: #ffc000;">


    <div class="col-lg-6" style="background-color: #ffc000;">
        <a href="/young" style="font-family: lovelyFont2">
            <div class="link" style="color: white">
                <h1>YOUNG ARTIST</h1>
            </div>
        </a>
    </div>
    <div class="col-lg-4" style="background-color: #ffc000;">
        <h1 class="pull-left"></h1>
    </div>
<!--    <div class="col-lg-2" style="background-color: #ffc000;">-->
<!--        <h4 class="pull-right" style="color: #ffffff;"><br><br>more</h4>-->
<!--    </div>-->


</div>

<div class="container">
    <div class="row text-center" style="background-color: #ffc000;">

        <?php
        $args = array(
            'posts_per_page' => 6,
            'post_type' => 'custom_post',
            'order' => "DESC",
            "post_status" => "publish",
            'category_name' => 'young'
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