<div class="container" >


    <a href="?page_id=9" style="font-family: lovelyFont2">
        <div class="link">
            <h2>FOREIGN CINEMA</h2>
        </div>
    </a>
    
</div>

<div class="container" style="background-color: #ddddff">
    <div class="row text-center" style="background-color: #ddddff">
        <?php
        $args = array(
            'posts_per_page' => 6,
            'post_type' => 'custom_post',
            'order' => "DESC",
            'category_name' => 'foreign'
        );
        $recent_posts = wp_get_recent_posts($args, ARRAY_A);
        ?>

        <?php
        foreach ($recent_posts as $recent) {
            $i = $recent['ID'];
            ?>

            <div class="col-md-2 col-sm-6 hero-feature" style="background-color: #ddddff">
                <div class="thumbnail" style="background-color: #ddddff;margin-top: 15px">
                    <img style="width:155px; height:180px;border-radius: 20px" src="<?php
                    $feat_image = wp_get_attachment_url(get_post_thumbnail_id($i));
                    echo $feat_image;
                    ?>" alt="">
                    <div class="caption">

                        <p style="margin-top:-5px; height:40px; overflow:hidden">
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