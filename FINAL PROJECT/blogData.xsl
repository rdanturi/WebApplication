<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<head>
	<title>My Own Blog!!!</title>
	
	<link rel="stylesheet" type="text/css" href="stylen.css" />
		<script type="text/javascript">
		function show_alert()
		{
		alert("Thanks for Commenting.");
			}
	
	function queryString()
				{
					var query = window.location.search.substring(1);
					var value = query.split('=')[1];
										
					x1 = document.getElementById("first");
					y1 = document.getElementById("second");
					z1 = document.getElementById("third");
					w1 = document.getElementById("fourth");
					if(value == "blogentryid0")
					{
						y1.style.display = "none";
						z1.style.display = "none";
						w1.style.display = "none";
						x1.style.display = "block";
					}
					if(value== "blogentryid1") 
					{
						x1.style.display = "none";
						w1.style.display = "none";
						z1.style.display = "none";
						y1.style.display = "block";
					}
						if(value== "blogentryid2") 
					{
						x1.style.display = "none";
						w1.style.display = "none";
						y1.style.display = "none";
						z1.style.display = "block";
					}
						if(value== "blogentryid3") 
					{
						x1.style.display = "none";
						y1.style.display = "none";
						z1.style.display = "none";
						w1.style.display = "block";
					}
				}	
	</script>
</head>
<body >

	<script>
			queryString();
			</script>

    
<ul id="menu">
<li id="nav1"><a href="index.html" style="padding-top:50px">Home<span>Welcome!</span></a></li>
<li id="nav4"><a href="index.html"><img src="images/menu_icon1.gif" alt="" style="padding-top:100px; margin-left:-160px"/></a></li>

<li style="margin-left:-60px"><a href="donate.html" style="padding-top:50px">SUPPORT<span>Us</span></a></li>
<li><a href="donate.html"><img src="images/menu_icon2.gif" alt="" style="padding-top:100px; margin-left:-180px"/></a></li>

<li id="nav5" class="active" style="margin-left:-60px"><a href="blog.html" style="padding-top:50px">Our<span>Blog</span></a></li>
<li id="nav4"><a href="blog.html"><img src="images/menu_icon3.gif" alt="" style="padding-top:100px; margin-left:-150px"/></a></li>

<li id="nav5" style="margin-left:-60px"><a href="knowus.html" style="padding-top:50px">Know<span>Us</span></a></li>
<li id="nav4"><a href="knowus.html"><img src="images/menu_icon4.gif" alt="" style="padding-top:100px; margin-left:-150px"/></a></li>

<li id="nav5" style="margin-left:-60px"><a href="Contact.html" style="padding-top:50px">Contact<span>Us</span></a></li>
<li id="nav4"><a href="contact.html"><img src="images/menu_icon5.gif" alt="" style="padding-top:100px; margin-left:-180px"/></a></li>

</ul>


<table class="whole" width="300">
<tr>

<td colspan="4">
<div style="margin-left:-910px; padding-top:180px"><p align="justify"><xsl:apply-templates select="blog/blog_entries[1]"/></p></div>
<div style="margin-left:-910px"><p align="justify"><xsl:apply-templates select="blog/blog_entries[2]"/></p></div>
<div style="margin-left:-910px"><p align="justify"><xsl:apply-templates select="blog/blog_entries[3]"/></p></div>
<div style="margin-left:-910px"><p align="justify"><xsl:apply-templates select="blog/blog_entries[4]"/></p></div>
</td>
</tr>
</table>

<form name="input" style="margin-left:100px"  method="post">

<table>
<tr>
<td colspan="2">
<h2 style="color:red"> Add a Comment</h2></td></tr>
<tr><td>
<label for="title" style="color:white">Title: </label></td><td align="left"> <input type="text" name="title" size="54" id="title" />
</td></tr>
<tr><td style="color:white">Body:</td><td align="left"><textarea cols="40" rows="5" name="myname">
	</textarea>
</td></tr>
<tr><td colspan="2" align="right"><input type="submit" value="submit" onclick="show_alert()" /> 
	<input type="reset" value="Clear" class="input" />
</td>
</tr>
</table>
</form>
    <footer>
    <div style="padding-100; color:white" >
    <p id="foot">Copyright  Trademark of CST598</p>
    </div>
    </footer>	



</body>
</html>

</xsl:template>
<xsl:template match="blog_entries[1]">
<div id="first" style="color:white">
<p><h3><xsl:value-of select="u_id"/></h3></p>
<p><h3><xsl:value-of select="title"/></h3></p>
<p><h3><xsl:value-of select="creation_time"/></h3></p>
<p><xsl:value-of select="description"/><br /><br /></p>
<br />
<br />
</div>
</xsl:template>

<xsl:template match="blog_entries[2]">
<div id="second" style="color:white">
<p><h3><xsl:value-of select="u_id"/></h3></p>
<p><h3><xsl:value-of select="title"/></h3></p>
<p><h3><xsl:value-of select="creation_time"/></h3></p>
<p><xsl:value-of select="description"/><br /> 
<br />       
</p>
</div>
</xsl:template>	

<xsl:template match="blog_entries[3]">
<div id="third" style="color:white">
<p><h3><xsl:value-of select="u_id"/></h3></p>
<p><h3><xsl:value-of select="title"/></h3></p>
<p><h3><xsl:value-of select="creation_time"/></h3></p>
<p><xsl:value-of select="description"/><br /><br /></p>
<br />
<br />
</div>
</xsl:template>

<xsl:template match="blog_entries[4]">
<div id="fourth" style="color:white">
<p><h3><xsl:value-of select="u_id"/></h3></p>
<p><h3><xsl:value-of select="title"/></h3></p>
<p><h3><xsl:value-of select="creation_time"/></h3></p>
<p><xsl:value-of select="description"/><br /><br /></p>
<br />
<br />
</div>
</xsl:template>



</xsl:stylesheet>