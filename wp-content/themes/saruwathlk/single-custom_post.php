<?php
/*
  Template Name: Archives

 */
get_header();

?>
<body>
<div class="container bor">
    <div class="row">


        <!-- Sidebar -->
        <aside class="col-sm-4 sidebar sidebar-right">

            <?php require_once('template/advertisment/postview_side_advertisment.php'); ?>


            <?php require_once('template/postview/side_recentpost.php'); ?>

        </aside>
        <!-- /Sidebar -->



        <!-- Article main content -->
        <article id="post-<?php the_ID(); ?>" class="col-lg-8 col-md-8 col-sm-12 col-xs-12 maincontent">

            <?php while (have_posts()) : the_post(); ?>


                <h1 class="inner-page-header"><?php the_title(); ?></h1>

                <div class="row">

                    <div class="social-sh col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <!-- Facebook -->
                        <a href="https://www.facebook.com/sharer/sharer.php?u="
                           title="Share on Facebook" target="_blank" class="btn btn-facebook"><i
                                class="fa fa-facebook"></i>
                            Facebook</a>
                        <!-- Google+ -->
                        <a href="https://plus.google.com/share?url=" title="Share on Google+" target="_blank"
                           class="btn btn-googleplus hidden-xs"><i class="fa fa-google-plus"></i> Google+</a>

                    </div>
                </div>
                <hr style="margin-top:9px; margin-bottom:0px">

                <?php echo the_content(); ?>
            <?php endwhile; // end of the loop. ?>
        </article>

    </div>


    <!--footer start from here-->
    <?php require_once('footer.php'); ?>
    <!--footer end from here-->

    <?php require_once('template/javascript.php'); ?>


</body>
</html>
