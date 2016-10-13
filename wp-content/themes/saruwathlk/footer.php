<link href="https://fortawesome.github.io/Font-Awesome/assets/font-awesome/css/font-awesome.css" rel="stylesheet">
<footer>
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-sm-6 footerleft ">
                <div class="logofooter">
                    <img src="<?php echo get_bloginfo('stylesheet_directory'); ?>/img/saruwathlogo2.png" alt=""
                         class="img-responsive" style="width: 50%;"/>
                </div>
                <p>මෙම සරුවත්.lk වෙබ් අඩවිය තුළ පළවෙන සියලු ලිපි, ඡායාරූප හා විඩියෝ අප සතුවන බැවින් අවසරයකින් තොරව
                    ඩිජිටල් හා මුද්‍රිත මාධයයන්හි නැවත පළ කිරීම සපුරා තහනම්ය. එහෙත්, සරුවත්.lk වෙබ් අඩවියේ අනුග්‍රහයෙන්
                    පළ කරන බව සඳහන් කොට මෙම ලිපි ඡායාරූප හා විඩියෝ දර්ශන සංස්කරණය නොකට පළ කරන්නට අවසර ඇත.</p>

                <p><i class="fa fa-phone"></i> Phone : +94 011 4497674</p>
                <p><i class="fa fa-envelope"></i> E-mail : saruwathweb@gmail.com</p>

            </div>
            <div class="col-md-2 col-sm-6 paddingtop-bottom">
                <h6 class="heading7">GENERAL LINKS</h6>
                <ul class="footer-ul">
                    <li style="font-family: navfont;font-size: 16px"><a href="?page_id=5">HOME</a></li>
                    <li style="font-family: navfont;font-size: 16px"><a href="?page_id=7">HOTTY GIRL</a></li>
                    <li style="font-family: navfont;font-size: 16px"><a href="?page_id=11">NEWS</a></li>
                    <li style="font-family: navfont;font-size: 16px"><a href="?page_id=9">FOREIGN CINEMA</a></li>
                    <li style="font-family: navfont;font-size: 16px"><a href="?page_id=13">GALLERY</a></li>
                    <li style="font-family: navfont;font-size: 16px"><a href="?page_id=15">YOUNG ARTIST</a></li>
                    <li style="font-family: navfont;font-size: 16px"><a href="?page_id=17">MUSIC VIDEO</a></li>
                </ul>
            </div>
            <div class="col-md-3 col-sm-6 paddingtop-bottom">
                <h6 class="heading7">LATEST POST</h6>
                <div class="post">
                    <?php
                    $args = array(
                        'posts_per_page' => 3,
                        'post_type' => 'custom_post',
                        "post_status" => "publish",
                        "orderby" => "date",
                        "order" => 'DESC',

                    );


                    $recent_posts = wp_get_recent_posts($args, ARRAY_A);
                    ?>

                    <?php
                    foreach ($recent_posts as $recent) {
                        $i = $recent['ID'];

                        $date = get_the_time('F j, Y', $i);
                        ?>


                        <p style="overflow:hidden"">
                            <?php
                            echo '<a href="' . get_permalink($i) . '">' . get_the_title($i) . '</a>';
                            ?>
                            <span> <?php echo $date ?></span>
                        </p>

                        <?php
                    }
                    ?>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 paddingtop-bottom">
                <div class="fb-page" data-href="https://www.facebook.com/facebook" data-tabs="timeline"
                     data-height="300" data-small-header="false" style="margin-bottom:15px;"
                     data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                    <div class="fb-xfbml-parse-ignore">
                        <blockquote cite="https://www.facebook.com/facebook"><a
                                href="https://www.facebook.com/facebook">Facebook</a></blockquote>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="copyright">
        <div class="container">
            <div class="col-md-6">
                <p>© 2016 - All Rights with Saruwath.lk</p>

            </div>
            <div class="col-md-6">
                <ul class="bottom_ul">

              

                    <p>Developed By - <a href="#">ideasoft</a> with <a href="#">Tharuka Fernando</a></p>

                </ul>
            </div>
        </div>
    </div>
</footer>

