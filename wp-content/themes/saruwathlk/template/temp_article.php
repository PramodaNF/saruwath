<!-- Article main content -->
<article class="col-lg-8 col-md-8 col-sm-12 col-xs-12 maincontent">


    <?php
    $my_postid = 26;//This is page id or post id.
    $content_post = get_post($my_postid);

    $post_title = $content_post->post_title;
    $post_content = $content_post->post_content;
    $content = apply_filters('the_content', $content);
//    $content = str_replace(']]>', ']]&gt;', $content);
   // echo $content;
    $post_link = get_post_permalink($my_postid);

    ?>

    <h1 class="inner-page-header"><?php echo $post_title ?></h1>



    <div class="row">

        <div class="social-sh col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <!-- Facebook -->
            <a href="https://www.facebook.com/sharer/sharer.php?u="
               title="Share on Facebook" target="_blank" class="btn btn-facebook"><i class="fa fa-facebook"></i>
                Facebook</a>
            <!-- Google+ -->
            <a href="https://plus.google.com/share?url=" title="Share on Google+" target="_blank" class="btn btn-googleplus hidden-xs"><i class="fa fa-google-plus"></i> Google+</a>

        </div>
    </div>
    <hr style="margin-top:9px; margin-bottom:0px">

    <?php echo $post_content ?>



    </div>
</article