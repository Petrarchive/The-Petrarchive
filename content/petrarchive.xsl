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
    
    <xsl:param name="includeToolbox" select="false()"/>
    
    <xsl:template match="tei:g" priority="99">
        <xsl:value-of select="normalize-space(id(substring-after(@ref,'#'))/tei:mapping[@type = 'visual'])"/>
    </xsl:template>
</xsl:stylesheet>