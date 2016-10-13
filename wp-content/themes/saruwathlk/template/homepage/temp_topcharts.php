<div class="container">
    <div class="page-header">
        <h1>Top Chart</h1>
    </div>

</div>

<div class="container" style="background-color: #ffffff;">
    <div class="row">

        <div class="col-lg-6">
            <div class="row">

                <ul class="event-list">


                    <?php
                    $args = array(
                        'posts_per_page' => 5,
                        'post_type' => 'topchart',
                        'order' => "ASC",
                        'category_name' => 'firstfive'
                    );
                    $recent_posts = wp_get_recent_posts($args, ARRAY_A);
                    ?>

                    <?php
                    foreach ($recent_posts as $recent) {
                        $i = $recent['ID'];
                        ?>


                        <li>


                            <time datetime="2014-07-20 2000">
                            <span class="day"><?php
                                $meta_value = get_post_meta($recent['ID'], 'songnum', true);
                                echo $meta_value;
                                ?></span>
                                <span class="month">NO</span>

                            </time>
                            <img alt="My 24th Birthday!" src="<?php
                            $feat_image = wp_get_attachment_url(get_post_thumbnail_id($i));
                            echo $feat_image;
                            ?>"/>
                            <div class="info">
                                <h2 class="title">

                                    <?php
                                    $meta_value = get_post_meta($recent['ID'], 'youtube_link', true);
                                    ?>

                                    <?php
                                    echo '<a target="_blank"  href="' . $meta_value . '">' . get_the_title($i) . '</a>';
                                    ?>

                                </h2>

                                <ul>

                                    <li style="width:33%;">-<?php
                                        $meta_value = get_post_meta($recent['ID'], 'artist_name', true);
                                        echo $meta_value;
                                        ?>-<span></span></li>
                                </ul>
                            </div>

                        </li>

                        <?php
                    }
                    ?>

                </ul>

            </div>

        </div>
        <div class="col-lg-6">
            <div class="row">

                <ul class="event-list">
                    <?php
                    $args = array(
                        'posts_per_page' => 5,
                        'post_type' => 'topchart',
                        'order' => "ASC",
                        'category_name' => 'secondfive'
                    );
                    $recent_posts = wp_get_recent_posts($args, ARRAY_A);
                    ?>

                    <?php
                    foreach ($recent_posts as $recent) {
                        $i = $recent['ID'];
                        ?>

                        <li>
                            <time datetime="2014-07-20 2000">
                            <span class="day"><?php
                                $meta_value = get_post_meta($recent['ID'], 'songnum', true);
                                echo $meta_value;
                                ?></span>
                                <span class="month">NO</span>

                            </time>
                            <img alt="My 24th Birthday!" src="<?php
                            $feat_image = wp_get_attachment_url(get_post_thumbnail_id($i));
                            echo $feat_image;
                            ?>"/>
                            <div class="info">
                                <h2 class="title">
                                    <?php
                                    $meta_value = get_post_meta($recent['ID'], 'youtube_link', true);
                                    ?>

                                    <?php
                                    echo '<a href="' . $meta_value . '">' . get_the_title($i) . '</a>';
                                    ?>
                                </h2>

                                <ul>
                                    <li style="width:33%;">-<?php
                                        $meta_value = get_post_meta($recent['ID'], 'artist_name', true);
                                        echo $meta_value;
                                        ?>-<span></span>
                                    </li>
                                </ul>
                            </div>

                        </li>

                        <?php
                    }
                    ?>

                </ul>

            </div>
        </div>


    </div>
</div>