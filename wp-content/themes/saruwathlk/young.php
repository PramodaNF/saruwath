<?php
/*
  Template Name:Young
 */
get_header();

?>

<body style="border-left: 50px solid black; border-right: 50px solid black;">




<div id='main-content'><!--content start--></div>




<div class="container bor">
    <div class="row">
        <!-- Article main content -->
        <article class="col-sm-8 maincontent">
            <header class="page-header">
                <h1 >Young Artist</h1>
            </header>

            <div class="row text-center">

                <?php
                $args = array(
                    'posts_per_page' => 15,
                    'post_type' => 'custom_post',
                    'order' => "DESC",
                    'category_name' => 'young'
                );
                $recent_posts = wp_get_recent_posts($args, ARRAY_A);
                ?>

                <?php
                foreach ($recent_posts as $recent) {
                    $i = $recent['ID'];
                    ?>

                    <div class="col-md-4 col-sm-6 hero-feature">
                        <?php
                        echo '<a href="' . get_permalink($i) . '"</a>';
                        ?>
                        <div style="min-height: 315px;" class="thumbnail success">

                            <img style="width:228px; height:134px;"
                                 src="<?php
                                 $feat_image = wp_get_attachment_url(get_post_thumbnail_id($i));
                                 echo $feat_image;
                                 ?>"
                                 alt="">
                            <div  class="caption">
                                <h3 style="margin-top:10px; height:78px; overflow:hidden"><?php echo get_the_title($i);?></h3>
                                <p>
                                    <?php echo '<a href="' . get_permalink($i) . '" class="btn btn-success">More</a>';?>
                                </p>
                            </div>
                        </div>
                        </a>
                    </div>


                    <?php
                }
                ?>


<!--                <div class="row">-->
<!--                    <ul class='pagination'>-->
<!--                        <li class='disabled'>-->
<!--                        <li class='active'><a href='#'>1<span class='sr-only'></span></a></li>-->
<!--                        <li><a href="http://www.saravita.lk/videos-ent/30">2</a></li>-->
<!--                        <li><a href="http://www.saravita.lk/videos-ent/30">&gt;</a>&nbsp;-->
<!--                    </ul>-->
<!--                </div>-->

            </div>




        </article>
        <!-- /Article -->


        <!-- Sidebar -->
        <aside class="col-sm-4 sidebar sidebar-right">

            <?php require_once('template/advertisment/postview_side_advertisment.php'); ?>


            <?php require_once('template/postview/side_recentpost.php'); ?>

        </aside>
        <!-- /Sidebar -->

    </div>

    <!--footer start from here-->
    <?php require_once('footer.php'); ?>
    <!--footer end from here-->

    <?php require_once('template/javascript.php'); ?>




</body>
</html>
