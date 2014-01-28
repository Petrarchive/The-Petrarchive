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
    
    <xsl:param name="includeToolbox" select="true()"/>
    <xsl:param name="pbNote" select="''"/>
    
    <xsl:param name="customCSS.norm" select="concat($filePrefix,'/css/custom_norm.css')"/>
    <xsl:param name="customCSS" select="concat($filePrefix,'/css/custom.css')"/>
    
    <xsl:template match="tei:g" priority="99">
        
        <xsl:choose>
            <xsl:when test="id(substring-after(@ref,'#'))/tei:mapping[@type = 'visual']">
                <xsl:value-of select="normalize-space(id(substring-after(@ref,'#'))/tei:mapping[@type = 'visual'])"/>
            </xsl:when>
            <xsl:otherwise>
                <xsl:value-of select="concat('[',normalize-space(id(substring-after(@ref,'#'))/tei:charName),']')"/>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>
    
    <xsl:template match="tei:cb[@n='1-of-2']">
        <xsl:variable name="mycb" select="."/>
        <div style="float:left;">
            <xsl:apply-templates select="ancestor::tei:lg[@type = 'sestina']//tei:l[preceding::tei:cb[@n = '1-of-2'] = $mycb and following::tei:cb[@n='2-of-2']]" mode="process"/>
        </div>
    </xsl:template>
    
    <xsl:template match="tei:cb[@n='2-of-2']">
        <xsl:variable name="mycb" select="."/>
        <div style="float:left; margin-right:2em;">
            <xsl:apply-templates select="ancestor::tei:lg[@type = 'sestina']//tei:l[preceding::tei:cb[@n = '2-of-2'] = $mycb]" mode="process"/>
        </div>
    </xsl:template>
    
    <xsl:template match="tei:lg[@type = 'sestina']//tei:l[preceding::tei:cb]"/>
    <xsl:template match="tei:lg[@type = 'sestian']//tei:lg">
        <xsl:apply-templates/>
    </xsl:template>
    
    <xsl:template match="tei:lg[@type = 'sestina']//tei:l[preceding::tei:cb]" mode="process">
            <xsl:element name="{local-name()}">
                <xsl:call-template name="addID"/>
                <xsl:apply-templates select="@*|node()"/>
            </xsl:element>
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
            <meta charset="UTF-8"/>
            <link id="maincss" rel="stylesheet" type="text/css" href="{$teibpCSS}"/>
            <link id="customcss" rel="stylesheet" type="text/css" href="{$customCSS}"/>
          <script type="text/javascript" src="{$jqueryJS}"></script>
          <!-- <script type="text/javascript" src="{$jqueryBlockUIJS}"></script>-->
          <script type="text/javascript" src="{$teibpJS}"></script>
            <script type="text/javascript">
                function switchCustomCSS(theme) {
                document.getElementById('customcss').href=theme.options[theme.selectedIndex].value;
                }
            </script>
            <xsl:call-template name="rendition2style"/>
            <title><xsl:value-of select="$htmlTitle"/><!-- don't leave empty. --></title>
            <xsl:if test="$includeAnalytics = true()">
                <xsl:call-template name="analytics"/>
            </xsl:if>
        </head>
    </xsl:template>
    
    <!-- Petrarchive Toolbox -->
    <xsl:template name="teibpToolbox">
        <div id="teibpToolbox">
            <div>
                <h1 style="display:inline;">text view </h1>
                <select style="display:inline;" id="themeBox" onchange="switchCustomCSS(this);">
                    <option value="{$customCSS}" >diplomatic transcription</option>
                    <option value="{$customCSS.norm}">edited text</option>
                </select>			
            </div>
        </div>
    </xsl:template>
    
    <xsl:variable name="htmlFooter">
     <footer>© 2013 H. Wayne Storey &amp; John A. Walsh. This document is part of the Petr<em>archive</em>.<br/>
By H. Wayne Storey, John A. Walsh, Isabella Magni, Allison M. McCormack, and Laura Pence.<br/>
<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by/4.0/80x15.png" /></a> <a xmlns:cc="http://creativecommons.org/ns#" href="http://petrarchive.org" property="cc:attributionName" rel="cc:attributionURL"><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Petr<i>archive</i></span></a> by <a href="http://www.indiana.edu/~frithome/faculty/italian/storey.shtml">H. Wayne Storey</a> and <a href="http://johnwalsh.name/">John A. Walsh</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.<br/>
Powered by <a href="{$teibpHome}">TEI Boilerplate</a>.
</footer>
    </xsl:variable>
  
<xd:doc><xd:desc>These lines get line numbers. Canzone is not regular.</xd:desc></xd:doc>
  <xsl:template match="tei:lg[@type = 'sonnet']//tei:l[@n = '5']|tei:lg[@type = 'sonnet']//tei:l[@n = '9']|tei:lg[@xml:id = 'rvf070']//tei:l[@n mod 5 = 0]|tei:lg[@xml:id = 'rvf071']//tei:l[@n = 5]|tei:lg[@xml:id = 'rvf071']//tei:l[@n = 15]|tei:lg[@xml:id = 'rvf071']//tei:l[@n = 20]|tei:lg[@xml:id = 'rvf071']//tei:l[@n = 30]|tei:lg[@xml:id = 'rvf071']//tei:l[@n = 35]">
        <span class="lno"><xsl:value-of select="@n"/></span>
            <xsl:element name="{local-name()}">
                <xsl:call-template name="addID"/>
                <xsl:apply-templates select="@*|node()"/>
            </xsl:element>
    </xsl:template>
    
    <xsl:template match="*[@sameAs]">
        <xsl:param name="sameAs" select="substring-after(@sameAs,'#')"/>
        <xsl:apply-templates select="//*[@xml:id = $sameAs]"/>
    </xsl:template>
  
  <xsl:template name="pb-handler">
    <xsl:param name="n"/>
    <xsl:param name="facs"/>
    <xsl:param name="id"/>
    
    <span class="-teibp-pageNum">
      <!-- <xsl:call-template name="atts"/> -->
      <span class="-teibp-pbNote"><xsl:value-of select="$pbNote"/></span>
      <xsl:value-of select="@n"/>
      <xsl:text> </xsl:text>
    </span>
    <span class="-teibp-pbFacs">
      <a class="gallery-facs" rel="prettyPhoto[gallery1]">
        <xsl:attribute name="onclick">
          <xsl:value-of select="concat('showFacs(',$apos,$n,$apos,',',$apos,$facs,$apos,',',$apos,$id,$apos,')')"/>
        </xsl:attribute>
        <img  alt="{$altTextPbFacs}" class="-teibp-thumbnail">
          <xsl:attribute name="src">
            <xsl:value-of select="@facs"/>
          </xsl:attribute>
        </img>
      </a>
    </span>
    <!--
    <span class="petrarchive-visindex-thumbnail">
      <a href="{concat('../images/visindex/',$id,'.svg')}">
        <img src="{concat('../images/visindex/',$id,'.svg')}" 
          height="64" border="1"/>
        
      </a>
    </span>
    -->
  </xsl:template>
        
    
</xsl:stylesheet>