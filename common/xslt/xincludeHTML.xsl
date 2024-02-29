<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
   xmlns:xi="http://www.w3.org/2001/XInclude" xmlns:fn="http://www.w3.org/2005/xpath-functions">

   <xsl:output indent="no" method="xhtml" encoding="utf-8" omit-xml-declaration="no"
      doctype-system="about:legacy-compat"/>

   <!-- Copy everything by default -->
   <xsl:mode on-no-match="shallow-copy"/>

   <!-- Template to handle xi:include elements -->
   <xsl:template match="xi:include">
      <!-- Resolve the href attribute using fn:doc() -->
      <xsl:variable name="included-doc" select="fn:doc(@href)"/>

      <!-- Apply templates to the included document -->
      <xsl:apply-templates select="$included-doc/node()"/>
   </xsl:template>

</xsl:stylesheet>
