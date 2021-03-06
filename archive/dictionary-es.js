/**
 * Copyright (C) 2000-2014 Geometria Contributors
 * http://geocentral.net/geometria
 * 
 * Geometria is free software released under the MIT License
 * http://opensource.org/licenses/MIT
 */
define({
    
// Actions
"action.Answer": "Answer",
"action.Area": "Compute Area",
"action.Bisector": "Draw Bisector",
"action.DeselectAll": "Deselect All",
"action.ClearNotepad": "Clear Notepad",
"action.Clone": "Clone Figure",
"action.Color": "Set Color",
"action.Contents": "Contents",
"action.Cube": "Cube",
"action.Cut": "Cut Figure",
"action.DefaultAttitude": "Default Attitude",
"action.Delete": "Delete",
"action.DivideAngle": "Divide Angle",
"action.DivideSegment": "Divide Segment",
"action.Dodecahedron": "Dodecahedron",
"action.EraseSegment": "Erase Segment",
"action.EraseSelection": "Erase Selection",
"action.EraseRecordsBelow": "Erase records below",
"action.Exit": "Exit Geometria",
"action.ExportDocument": "Export Document",
"action.ExportFigure": "Export Figure",
"action.FitToView": "Fit To View",
"action.Help": "Help",
"action.HomePage": "Home Page",
"action.Icosahedron": "Icosahedron",
"action.ImportDocument": "Import Document",
"action.InitialAttitude": "Initial Attitude",
"action.IntersectLines": "Intersect Lines",
"action.JoinFigures": "Join Figures",
"action.JoinPoints": "Join Points",
"action.Labels": "Toggle Labels",
"action.Language": "Set Language",
"action.LayAngle": "Lay Off Angle",
"action.LayDistance": "Lay Off Distance",
"action.LockProblem": "Lock Problem",
"action.MeasureAngle": "Measure Angle",
"action.MeasureDistance": "Measure Distance",
"action.Midpoint": "Draw Midpoint",
"action.Navigator": "Toggle Navigator",
"action.NewFolder": "New Folder",
"action.NewProblem": "New Problem",
"action.Next": "Next",
"action.NextTopic": "Next Topic",
"action.Octahedron": "Octahedron",
"action.Open": "Open",
"action.Perpendicular": "Draw Perpendicular",
"action.PreviousTopic": "Previous Topic",
"action.Print": "Print",
"action.Prism": "Prism",
"action.Properties": "Document Properties",
"action.Pyramid": "Pyramid",
"action.Redo": "Redo",
"action.RemoveFigure": "Remove Figure",
"action.RenameFigure": "Rename Figure",
"action.RenameFile": "Rename",
"action.RenamePoint": "Rename Point",
"action.RenameVariable": "Rename Variable",
"action.SaveDocument": "Save Document",
"action.SaveDocumentAs": "Save Document As",
"action.SaveFigure": "Save Figure",
"action.Scale": "Scale Figure",
"action.SelectAll": "Select All",
"action.Selector": "Toggle Selector",
"action.Shear": "Shear Figure",
"action.SolveProblem": "Solve Problem",
"action.Stop": "Stop",
"action.Tetrahedron": "Tetrahedron",
"action.Wireframe": "Toggle Wireframe",
"action.TotalArea": "Compute Total Area",
"action.Undo": "Undo",
"action.UsersGuide": "User's Guide",
"action.Volume": "Compute Volume",
"action.ZoomIn": "Zoom In",
"action.ZoomOut": "Zoom Out",

// Menus
"menu.Document": "Documento",
"menu.Draw": "Draw",
"menu.Edit": "Edit",
"menu.Figure": "Figure",
"menu.Gallery": "New Figure",
"menu.Help": "Help",
"menu.Measure": "Measure",
"menu.PlatonicSolids": "Platonic Solids",
"menu.Transform": "Transform",
"menu.View": "View",
"menu.Help": "Help",

// Navigator
"navigator.CannotCreateFolderDb": "Cannot create folder. The Geometria database appears to be corrupted. <a href='http://geocentral.net/geometria' target='_blank'>Click here</a> for help.",
"navigator.CannotCreateFolderServer": "Cannot create folder. The Geometria server may be unavailable. <a href='http://geocentral.net/geometria' target='_blank'>Click here</a> for help.",
"navigator.CannotCreateFolderExists": "Cannot create <span class='geometria_figurename'>${1}</span>. A folder or a file by the same name already exists.",
"navigator.CannotDeleteFileDb": "Cannot delete file. The Geometria database appears to be corrupted. <a href='http://geocentral.net/geometria' target='_blank'>Click here</a> for help.",
"navigator.CannotDeleteFileServer": "Cannot delete file. The Geometria server may be unavailable. <a href='http://geocentral.net/geometria' target='_blank'>Click here</a> for help.",
"navigator.CannotDeleteFolderDb": "Cannot delete folder. The Geometria database appears to be corrupted. <a href='http://geocentral.net/geometria' target='_blank'>Click here</a> for help.",
"navigator.CannotDeleteFolderServer": "Cannot delete folder. The Geometria server may be unavailable. <a href='http://geocentral.net/geometria' target='_blank'>Click here</a> for help.",
"navigator.CannotDragAndDropDb": "Cannot drag-and-drop. The Geometria database may be corrupted. <a href='http://geocentral.net/geometria' target='_blank'>Click here</a> for help.",
"navigator.CannotDragAndDropServer": "Cannot drag-and-drop. The Geometria server may be unavailable. <a href='http://geocentral.net/geometria' target='_blank'>Click here</a> for help.",
"navigator.CannotOpenFile": "Cannot open file. The Geometria server may be unavailable. <a href='http://geocentral.net/geometria' target='_blank'>Click here</a> for help.",
"navigator.CannotSaveFile": "Cannot save file. The Geometria server may be unavailable. <a href='http://geocentral.net/geometria' target='_blank'>Click here</a> for help.",
"navigator.CannotRenameFileDb": "Cannot rename file. The Geometria database appears to be corrupted. <a href='http://geocentral.net/geometria' target='_blank'>Click here</a> for help.",
"navigator.CannotRenameFileServer": "Cannot rename file. The Geometria server may be unavailable. <a href='http://geocentral.net/geometria' target='_blank'>Click here</a> for help.",
"navigator.CannotRenameFileExists": "Cannot rename file to <span class='geometria_figurename'>${1}</span>. A file or a folder by the same name already exists.",
"navigator.CannotRenameFolderDb": "Cannot rename folder. The Geometria database appears to be corrupted. <a href='http://geocentral.net/geometria' target='_blank'>Click here</a> for help.",
"navigator.CannotRenameFolderServer": "Cannot rename folder. The Geometria server may be unavailable. <a href='http://geocentral.net/geometria' target='_blank'>Click here</a> for help.",
"navigator.CannotRenameFolderExists": "Cannot rename folder to <span class='geometria_figurename'>${1}</span>. A file or a folder by the same name already exists.",
"navigator.CannotSaveFolderExists": "Cannot save as <span class='geometria_figurename'>${1}</span>. A folder by the same name exists.",
"navigator.CannotStartNavigator": "Cannot start navigator. The Geometria server may be unavailable. <a href='http://geocentral.net/geometria' target='_blank'>Click here</a> for help.",
"navigator.EnterFileName": "Enter file name",
"navigator.EnterFolderName": "Enter folder name",
"navigator.EnterNewName": "Enter new name",
"navigator.FileExists": "File <span class='geometria_figurename'>${1}</span> already exists.<br>Overwrite?",
"navigator.FileHasInvalidFormat": "File <span class='geometria_figurename'>${1}</span> has an invalid format.",
"navigator.InvalidName": "Invalid name. Names may contain alphanumeric characters and spaces.",

"Add": "Add",
"Angle": "Angle",
"Answer": "Answer",
"AnswerIsCorrect": "Your answer is correct. Congratulations!",
"AnswerIsIncorrect": "Your answer is incorrect. Please try again.",
"area": "area",
"AreaIn": "Area in ${1}",
"AssignToVariable": "Assign to variable",
"BadExpression": "Bad expression",
"BisectorOfAngle": "Bisector of angle &lt;${1}${2}${3} in figure <span class='geometria_figurename'>${4}</span>",
"ByFactor": "By factor",
"Calculate": "Calculate <span class='geometria_variablename'>${1}</span> = ${2}",
"Calculator": "Calculator",
"Cancel": "Cancel",
"CannotRemoveReferencedFigure": "Cannot remove figure <span class='geometria_figurename'>${1}</span> as it is referenced in the answer",
"CannotRenameReferencedFigure": "Cannot rename figure <span class='geometria_figurename'>${1}</span> as it is referenced in the answer",
"Clone": "Clone figure <span class='geometria_figurename'>${1}</span> as <span class='geometria_figurename'>${2}</span>",
"Close": "Close",
"ColorOf": "Color of ${1}",
"Comments": "Comments",
"ComputeAreaOfFace": "Compute area <span class='geometria_variablename'>${1}</span> of face [${2}] in figure <span class='geometria_figurename'>${3}</span>",
"ComputeTotalAreaOfFigure": "Compute total area <span class='geometria_variablename'>${1}</span> of figure <span class='geometria_figurename'>${2}</span>",
"ComputeVolumeOfFigure": "Compute volume <span class='geometria_variablename'>${1}</span> of figure <span class='geometria_figurename'>${2}</span>",
"ContainsLine": "contains line",
"ContainsNoEdge": "contains no edge",
"ContainsNoVertex": "contains no vertex",
"ConditionPlane": "Condition Plane",
"ContainsPoint": "contains point",
"DoesNotContainPoint": "does not contain point",
"DoesNotContainLine": "does not contain line",
"ParallelToLine": "is parallel to line",
"ParallelToPlane": "is parallel to plane",
"PerpendicularToLine": "is perpendicular to line",
"PerpendicularToPlane": "is perpendicular to plane",
"CopyPasteProblemSolution": "Copy problem or solution code and paste it in here",
"CorrectAnswer": "Correct Answer",
"CorrectAnswerNumber": "Correct answer: <span class='geometria_variablename'>${1}</span>",
"CorrectAnswerInFigure": "Correct answer: ${1} in figure <span class='geometria_figurename'>${2}</span>",
"CorrectAnswerOther": "Correct answer: ${1}",
"CutFigure": "Cut Figure",
"CutFigureThroughPoints": "Cut figure <span class='geometria_figurename'>${1}</span> through points ${2}, ${3}, ${4}",
"CutsVolumeInRatio": "cuts volume in ratio",
"Delete": "Delete",
"Distance": "Distance",
"DivideAngle": "Divide Angle",
"DivideAngleInRatio": "Divide angle [${1}${2}${3}] in ratio <span class='geometria_variablename'>${4}</span>:<span class='geometria_variablename'>${5}</span> in figure <span class='geometria_figurename'>${6}</span>",
"DivideSegment": "Divide Segment",
"DivideSegmentInRatio": "Divide segment [${1}${2}] in ratio <span class='geometria_variablename'>${3}</span>:<span class='geometria_variablename'>${4}</span> in figure <span class='geometria_figurename'>${5}</span>",
"DocumentSaved": "Document saved",
"DoubleClickToEditOption": "Double click to edit this option",
"DrawPerpendicular": "Draw Perpendicular",
"EditProblemProperties": "Double click to edit problem properties",
"EditProblemText": "Double click to edit the problem text",
"EditSolutionProperties": "Double click to edit solution properties",
"Enter2Points": "Enter 2 points",
"Enter2CommaSeparatedPoints": "Enter 2 comma-separated points",
"Enter3Points": "Enter 3 points",
"Enter3NonCollinearCommaSeparatedPoints": "Enter 3 non-collinear comma-separated points",
"EnterAngleBetween0AndPi": "Enter an expression between 0 and &#x03c0;",
"EnterCommaSeparatedPoints": "Enter comma-separated points",
"EnterNewFigureName": "Enter new figure name",
"EnterNewPointLabel": "Enter new point label",
"EnterNewVariableName": "Enter new variable name",
"EnterNumberOfSides": "Enter number of sides",
"EnterPoint": "Enter a point",
"EnterPositiveExpression": "Enter a positive expression",
"EnterRatio": "Enter ratio",
"EnterValidExpression": "Enter a valid expression",
"EnterVariableName": "Enter variable name",
"EquilateralTriangle": "equilateral triangle",
"EraseSegment": "Erase Segment",
"EraseSegmentInFigure": "Erase segment [<span class='geometria_figurename'>${1}${2}</span>] in figure <span class='geometria_figurename'>${3}</span>",
"EraseSelectionInFigure": "Erase selected points and segments in figure <span class='geometria_figurename'>${1}</span>",
"Error": "Error",
"ExportFigure": "Export ${1}",
"ExportProblem": "Export Problem",
"ExportSolution": "Export Solution",
"Figure": "Figure",
"FigureAlreadyExists": "Figure <span class='geometria_figurename'>${1}</span> already exists",
"FigureFileCorrupted": "Geometria figure file <span class='geometria_figurename'>${1}</span> is corrupted.",
"FigureNameRule": "A figure name may contain letters, digits and the underscore sign. It  cannot begin with a digit. Figure names are case-sensitive.",
"FileContainsFigure": "File <span class='geometria_figurename'>${1}</span> contains a figure. A figure from a file cannot be added to the solution.",
"FixedPlane": "Fixed Plane",
"Help": "Help",
"ImportHasInvalidFormat": "Import has invalid format.",
"ImportDocument": "Import Document",
"IncorrectAnswer": "Incorrect Answer",
"InRatio": "In ratio",
"IntersectLines": "Intersect Lines",
"IntersectLinesInFigure": "Intersect lines <span class='geometria_figurename'>${1}${2}</span>, <span class='geometria_figurename'>${3}${4}</span> in figure <span class='geometria_figurename'>${5}</span>",
"IsoscellesTriangle": "isoscelles triangle",
"JoinArbitrarily": "Join arbitrarily",
"JoinAtSelected": "Join at selected elements",
"JoinFigures": "Join Figures",
"JoinFiguresAtPoints": "Join figures <span class='geometria_figurename'>${1}</span>, <span class='geometria_figurename'>${2}</span> at points ${3}, ${4}, ${5} and ${6}, ${7}, ${8}, respectively",
"JoinPoints": "Join Points",
"JoinPointsInFigure": "Join points ${1}, ${2} in figure <span class='geometria_figurename'>${3}</span>",
"LabelRule": "A point label starts with a letter, possibly followed by one or more digits.",
"LayAngle": "Lay Off Angle",
"LayAngleInFigure": "Lay off angle <span class='geometria_variablename'>${1}</span> from [${2}${3}] in figure <span class='geometria_figurename'>${4}</span>",
"LayDistance": "Lay Off Distance",
"LayDistanceInFigure": "Lay off distance <span class='geometria_variablename'>${1}</span> from ${2} to [${3}${4}] in figure <span class='geometria_figurename'>${5}</span>",
"MeasureAngle": "Measure Angle",
"MeasureAngleInFigure": "Measure angle <span class='geometria_variablename'>${1}</span> = &lt;${2}${3}${4} in figure <span class='geometria_figurename'>${5}</span>",
"MeasureDistance": "Measure Distance",
"MeasureDistanceInFigure": "Measure distance <span class='geometria_variablename'>${1}</span> = |${2}${3}| in figure <span class='geometria_figurename'>${4}</span>",
"MidpointOfSegment": "Midpoint of segment [${1}${2}] in figure <span class='geometria_figurename'>${3}</span>",
"MisplaceEqualitySign": "Misplaced equality sign",
"MultipleChoice": "Multiple Choice",
"NewCube": "New cube <span class='geometria_figurename'>${1}</span>",
"NewDodecahedron": "New dodecahedron <span class='geometria_figurename'>${1}</span>",
"NewIcosahedron": "New icosahedron <span class='geometria_figurename'>${1}</span>",
"NewOctahedron": "New octahedron <span class='geometria_figurename'>${1}</span>",
"NewTetrahedron": "New tetrahedron <span class='geometria_figurename'>${1}</span>",
"NewPrism": "New ${1}-side prism <span class='geometria_figurename'>${2}</span>",
"NewPyramid": "New ${1}-side pyramid <span class='geometria_figurename'>${2}</span>",
"No": "No",
"NoSuchPointInSelectedFigure": "No such point in selected figure",
"NotAGeometriaFile": "<span class='geometria_figurename'>${1}</span> is not a Geometria file",
"Number": "Number",
"OK": "OK",
"OpenFigureFromFile": "Open figure <span class='geometria_figurename'>${1}</span> from file <span class='geometria_figurename'>${2}</span>",
"Parallelogram": "parallelogram",
"PerpendicularInFigure": "Perpendicular to [${1}${2}] through ${3} in figure <span class='geometria_figurename'>${4}</span>",
"PerpendicularsInFigure": "Perpendiculars to [${1}${2}] through ${3} in figure <span class='geometria_figurename'>${4}</span>",
"Plane": "Plane",
"PointAlreadyExists": "Point ${1} already exists in figure <span class='geometria_figurename'>${2}</span>",
"PointSet": "Point Set",
"ProblemFileCorrupted": "Geometria problem file <span class='geometria_figurename'>${1}</span> is corrupted.",
"ProblemModified": "The problem has been modified.<br>Would you like to save it?",
"ProblemProperties": "Problem properties",
"ProblemText": "Problem Text",
"Properties": "Properties",
"Rectangle": "rectangle",
"RedoAction": "Redo: ${1}",
"Rhombus": "rhombus",
"RemoveFigure": "Remove figure <span class='geometria_figurename'>${1}</span>",
"RenameFigure": "Rename ${1}",
"RenameFigureTo": "Rename figure <span class='geometria_figurename'>${1}</span> to <span class='geometria_figurename'>${2}",
"RenamePointIn": "Rename Point in ${1}",
"RenamePointTo": "Rename point <span class='geometria_figurename'>${1}</span> to <span class='geometria_figurename'>${2} in <span class='geometria_figurename'>${3}</span>",
"RenameVariable": "Rename Variable",
"RenameVariableTo": "Rename variable <span class='geometria_variablename'>${1}</span> to <span class='geometria_variablename'>${2}",
"RightTriangle": "right triangle",
"ScaleFigure": "Scale Figure",
"ScaleFigureByFactor": "Scale figure <span class='geometria_figurename'>${1}</span> by factor <span class='geometria_variablename'>${2}</span> along ${3}${4}",
"SectionShapedAs": "Section shaped as",
"Select": "Select",
"SelectCondition": "-- Select condition --",
"SelectFace": "Select face:",
"SelectPoint": "Select point:",
"SelectVariable": "Select variable:",
"ShearFigure": "Shear Figure",
"ShearFigureAlong": "Shear figure <span class='geometria_figurename'>${1}</span> along ${2}, [${3}${4}]",
"SolutionFileCorrupted": "Geometria solution file <span class='geometria_figurename'>${1}</span> is corrupted.",
"SolutionModified": "The solution has been modified.<br>Would you like to save it?",
"SolutionPlaybackInProgress": "This action is disabled while solution is being played back. Please stop the playback to execute this action",
"Square": "square",
"SureClearNotepad": "Are you sure you want to delete all notepad records? This action cannot be undone.",
"SureDeleteFile": "Are you sure you want to delete file <span class='geometria_figurename'>${1}</span>? This action cannot be undone.",
"SureDeleteFolder": "Are you sure you want to delete folder <span class='geometria_figurename'>${1}</span> and all its content? This action cannot be undone.",
"SureDeleteSolutionSteps": "Are you sure you want to delete all solution steps below the selected one? This action cannot be undone.",
"SureLockProblem": "Are you sure you want to lock this problem? This action cannot be undone. Consider saving the unlocked problem first.",
"TargetFigure": "Target figure",
"totalArea": "total area",
"TotalAreaOf": "Total area of ${1}",
"Type": "Type",
"TypeComments": "Type comments in here",
"TypeProblemProperties": "Type problem properties in here",
"TypeProblemText": "Type problem text in here",
"TypeSolutionProperties": "Type solution properties in here",
"UndoAction": "Undo: ${1}",
"UntitledProblem": "Untitled Problem",
"UntitledSolution": "Untitled Solution",
"Value": "Value",
"VariableAlreadyExists": "Variable <span class='geometria_variablename'>${1}</span> already exists",
"VariableRule": "A variable may contain letters, digits and the underscore sign. It  cannot begin with a digit. Variables are case-sensitive.",
"volume": "volume",
"VolumeOf": "Volume of ${1}",
"WebPage": "Web page",
"Yes": "Yes"

});
