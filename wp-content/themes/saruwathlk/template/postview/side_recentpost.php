<div class="recent-post">
    <div class="bann">
        Recent Post
    </div>
    <div class="recent-post1">


        <?php
                $args = array(
                    'posts_per_page' => 5,
                    'post_type' => 'custom_post',
                    "post_status" => "publish",
                    "orderby" => "date",
                    "order" => 'DESC',

                );


//        $args = array(
//            'posts_per_page' => 6,
//            'post_type' => 'custom_post',
//            'order' => "DESC",
//
//            array('category_name' => 'foreign,gallery')
//        );
        $recent_posts = wp_get_recent_posts($args, ARRAY_A);
        ?>

        <?php
        foreach ($recent_posts as $recent) {
            $i = $recent['ID'];
            ?>


            <div class="post col-sm-12">

                <div class="col-sm-6">
                    <img style="width:155px; height:92px;" src="<?php
                    $feat_image = wp_get_attachment_url(get_post_thumbnail_id($i));
                    echo $feat_image;
                    ?>" alt="">
                </div>
                <div class="col-sm-6">
                    <div class="pp">
                        <p style="width: 176px;height: 92px; overflow:hidden">
                            <?php
                            echo '<a href="' . get_permalink($i) . '">' . get_the_title($i) . '</a>';
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