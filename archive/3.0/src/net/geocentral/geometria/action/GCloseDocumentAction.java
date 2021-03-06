/**
 * Copyright 2000-2010 Geometria Contributors
 * http://geocentral.net/geometria
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License
 * http://www.gnu.org/licenses
 */
package net.geocentral.geometria.action;

import org.apache.log4j.Logger;

public class GCloseDocumentAction implements GAction {

    private static Logger logger = Logger.getLogger("net.geocentral.geometria");

    public boolean execute(GDocumentHandler documentHandler,
            boolean quietMode) {
        logger.info(quietMode);
        if (!documentHandler.onCloseDocument())
            return false;
        documentHandler.clearUndoableActions();
        documentHandler.setActiveDocument(null);
        documentHandler.setMasterSolution(null);
        documentHandler.documentChanged();
        documentHandler.setDocumentModified(false);
        documentHandler.setTitle(null);
        logger.info("");
        return true;
    }
}
