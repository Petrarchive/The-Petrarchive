<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="1.0"
    xmlns:eg="http://www.tei-c.org/ns/Examples"
    xmlns:tei="http://www.tei-c.org/ns/1.0" 
    xmlns:xd="http://www.oxygenxml.com/ns/doc/xsl" 
    xmlns:exsl="http://exslt.org/common"
    xmlns:msxsl="urn:schemas-microsoft-com:xslt"
    xmlns:fn="http://www.w3.org/2005/xpath-functions"
    extension-element-prefixes="exsl msxsl"
    xmlns="http://www.w3.org/1999/xhtml" 
    exclude-result-prefixes="xsl tei xd eg fn #default">
    
  <xsl:import href="teibp.xsl"/>
  <xsl:output method="html" encoding="utf-8" version="1.0" indent="yes" standalone="no" media-type="text/html" omit-xml-declaration="no" doctype-system="about:legacy-compat" /> 
  <xsl:param name="pbNote" select="''"/>
  

  <xsl:param name="bootstrapCSS" select="concat(
  $filePrefix, '/css/lib/bootstrap.min.css')"/>
  
  <xsl:param name="customCSS" select="concat($filePrefix,'/css/custom.css')"/>
  <xsl:param name="auxPageCSS" select="concat($filePrefix,'/css/auxillaryPage.css')"/>


  <xsl:template name="stickyHeader">
    <xsl:variable name="header">
      <xsl:copy-of select="document('../sticky_header.html')"/>
    </xsl:variable>
    <xsl:copy-of select="$header"/>
  </xsl:template>

  <xsl:template name="htmlFooter">
    <xsl:variable name="footer">
      <xsl:copy-of select="document('../footer.html')"/>
    </xsl:variable>
    <xsl:copy-of select="$footer"/>
  </xsl:template>

  <xd:doc>
    <xd:desc>
      <xd:p>TEI's head changed to tei-head to avoid conflicts with html/head.</xd:p>
    </xd:desc>
  </xd:doc>
  <xsl:template match="tei:head">
    <tei-head>
      <xsl:call-template name="addID"/>
      <xsl:apply-templates select="@*|node()"/>
    </tei-head>
  </xsl:template>

  <xsl:template match="/" name="htmlShell" priority="99">
		<html>
			<xsl:call-template name="htmlHead"/>

			<body>
        <main class="container row">
          <header>
            <xsl:call-template name="stickyHeader"/>
          </header>

          <aside class="col-12 col-md-3 nav flex-column">
            <!-- 
              Populate this nav with <a> using Javascript below
            -->
          </aside>

          <main class="col-12 col-md-9 ml-auto glossary">
            <xsl:apply-templates/>
          </main>
			  </main>
        
        <xsl:call-template name="htmlFooter"/>
			</body>
		</html>
	</xsl:template>
    
    <xsl:template match="tei:g" priority="99">
      <xsl:variable name="charId" select="substring-after(@ref,'#')"/>
        <xsl:choose>
            <xsl:when test="//tei:char[@xml:id = $charId]/tei:mapping[@type = 'visual']">
              <xsl:value-of select="normalize-space(//tei:char[@xml:id = $charId]/tei:mapping[@type = 'visual'])"/>
            </xsl:when>
            <xsl:otherwise>
              <xsl:value-of select="concat('[',normalize-space(//tei:char[@xml:id = $charId]/tei:charName),']')"/>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>
  

    <xsl:template match="tei:teiHeader//tei:title">
      <charta>
        <xsl:value-of select="normalize-space(substring-after(string(), ':'))"/>
      </charta>

      <title>
        <xsl:value-of select="normalize-space(substring-before(string(), ':'))"/>
      </title>
	  </xsl:template>
    
    <xsl:param name="htmlTitle">
        <xsl:value-of select="normalize-space(/tei:TEI/tei:teiHeader/tei:fileDesc/tei:titleStmt/tei:title[1])"/>        
    </xsl:param>
    
    <xsl:template name="htmlHead">
        <head>
            <!--
            <script type="text/javascript" src="//use.typekit.net/ctk5ksw.js"></script>
            <script type="text/javascript">try{Typekit.load();}catch(e){}</script>
            -->
             <!-- Required meta tags -->
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

            <link id="bootstrap" rel="stylesheet" type="text/css" href="{$bootstrapCSS}"/>


            <link id="maincss" rel="stylesheet" type="text/css" href="{$teibpCSS}"/>

            <link id="customcss" rel="stylesheet" type="text/css" href="{$customCSS}"/>
            <link rel="stylesheet" type="text/css" href="../css/stylesheets/screen.css" />

            <link id="customcss" rel="stylesheet" type="text/css" href="{$auxPageCSS}"/>

           
            <xsl:call-template name="rendition2style"/>
            <title><xsl:value-of select="$htmlTitle"/><!-- don't leave empty. --></title>
            <xsl:if test="$includeAnalytics = true()">
                <xsl:call-template name="analytics"/>
            </xsl:if>

            <script src="https://use.fontawesome.com/57840704ee.js"></script>
          
            <script type="text/javascript" src="{$teibpJS}"><xsl:comment> </xsl:comment></script>
            <script type="text/javascript" src="../dist/js/glossary.bundle.js"></script>

        </head>
    </xsl:template>
  
    
</xsl:stylesheet>
