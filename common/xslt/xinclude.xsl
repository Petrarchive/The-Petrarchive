<?xml version="1.0" encoding="UTF-8"?>
<!--
   Purpose:
      Process xi:include elements and add xml:base into included root
      element, pointing to the original file

   Reason:
     Neither xmllint nor lxml API provides something to get the origin
     of an included file. For lxml, see
       https://mailman-mail5.webfaction.com/pipermail/lxml/20130831/014852.html

   Parameters:
      n/a

   Input:
      Any XML document

    Output:
      XML document without any xi:include elements

   Author: Thomas Schraitle
   Copyright (C) 2021 SUSE Linux GmbH

-->
<xsl:stylesheet version="3.0" xmlns:xi="http://www.w3.org/2001/XInclude"
   xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
   
   <xsl:output indent="no" method="xhtml" encoding="utf-8" omit-xml-declaration="no" doctype-system="about:legacy-compat" /> 

   <!-- Copy any node -->
   <xsl:template match="node() | @*" name="copy">
      <xsl:copy>
         <xsl:apply-templates select="@* | node()"/>
      </xsl:copy>
   </xsl:template>


   <xsl:template match="xi:include">
      <xsl:variable name="href" select="@href"/>
      <xsl:apply-templates select="document($href)" mode="xinclude">
         <xsl:with-param name="filename" select="$href"/>
      </xsl:apply-templates>
   </xsl:template>


   <xsl:template match="/" mode="xinclude">
      <xsl:param name="filename"/>

      <xsl:apply-templates mode="xinclude">
         <xsl:with-param name="filename" select="$filename"/>
      </xsl:apply-templates>
   </xsl:template>


   <!-- Ignore all <?xml-model?> PIs from xincluded files -->
   <xsl:template match="/processing-instruction('xml-model')" mode="xinclude"/>

   <xsl:template match="/processing-instruction()|/comment()|/text()" mode="xinclude">
      <xsl:copy-of select="."/>
   </xsl:template>


   <xsl:template match="/*" mode="xinclude">
      <xsl:param name="filename"/>

      <xsl:copy>
         <xsl:copy-of select="@*"/>
         <xsl:attribute name="xml:base">
            <xsl:value-of select="$filename"/>
         </xsl:attribute>
      </xsl:copy>
      <!-- Fall back to normal mode -->
      <xsl:apply-templates/>
   </xsl:template>

</xsl:stylesheet>
