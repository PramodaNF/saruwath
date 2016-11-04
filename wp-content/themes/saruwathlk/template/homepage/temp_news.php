<?php
/**
 * Created by PhpStorm.
 * User: pramoda
 * Date: 11/4/16
 * Time: 10:15 PM
 */
?>

<div class="container" style="background-color: #000;">


    <div class="col-lg-6" style="background-color: #000;">


        <a href="/news" style="font-family: lovelyFont2">
            <div class="link" style="color: white">
                <h1>NEWS</h1>
            </div>
        </a>
    </div>
    <div class="col-lg-4" style="background-color: #000;">
        <h1 class="pull-left"></h1>
    </div>


    <div class="news magenta col-lg-12 ">
        <span>Latest News</span>
        <ul>
            <?php
            $args = array(
                'posts_per_page' => 6,
                'post_type' => 'custom_post',
                'order' => "DESC",
                'category_name' => 'news'
            );
            $recent_posts = wp_get_recent_posts($args, ARRAY_A);
            ?>

            <?php
            foreach ($recent_posts as $recent) {
                $i = $recent['ID'];
                ?>

                <li>
                    <?php
                    echo '<a href="' . get_permalink($i) . '">' . get_the_title($i) . '</a>';
                    ?>
                </li>


                <?php
            }
            ?>
        </ul>
    </div>

</div>

<div class="container" style="background-color: #000;">
    <div class="row text-center">
        <?php
        $args = array(
            'posts_per_page' => 6,
            'post_type' => 'custom_post',
            'order' => "DESC",
            "post_status" => "publish",
            'category_name' => 'news'
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