export const code = `export const deleteSection = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No section with that id");

  const cursor = SectionData.aggregate([
    [
      {
        $graphLookup: {
          from: "sectiondatas",
          startWith: "$_id",
          connectFromField: "_id",
          connectToField: "parent",
          as: "c",
        },
      },
      {
        $match: {
          _id: mongoose.Types.ObjectId(id),
        },
      },
      {
        $unwind: {
          path: "$c",
        },
      },
      {
        $project: {
          tmp: "$c._id",
          _id: 0,
        },
      },
    ],
  ]);
  const dataIds = (await cursor).map((doc) => {
    return doc.tmp;
  });

  console.log("dataIds: ", dataIds);

  //1. delete children of section document
  if (dataIds.length > 0)
    await SectionData.deleteMany({ _id: { $in: dataIds } });

  //2. delete items in section document or children section documents
  await ItemData.deleteMany({
    $or: [{ parent: { $in: dataIds } }, { parent: id }],
  });

  //3. delete section document
  await SectionData.findByIdAndDelete(id);

  res.json({ message: "Section deleted successfully" });
};`;

export const base = `export const deleteSection = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No section with that id");
    
      res.json({ message: "Section deleted successfully" });
};`;

export const cursor = `export const deleteSection = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No section with that id");

  const cursor = SectionData.aggregate([
    [
      {
        $graphLookup: {
          from: "sectiondatas",
          startWith: "$_id",
          connectFromField: "_id",
          connectToField: "parent",
          as: "c",
        },
      },
      {
        $match: {
          _id: mongoose.Types.ObjectId(id),
        },
      },
      {
        $unwind: {
          path: "$c",
        },
      },
      {
        $project: {
          tmp: "$c._id",
          _id: 0,
        },
      },
    ],
  ]);
  const dataIds = (await cursor).map((doc) => {
    return doc.tmp;
  });
    
      res.json({ message: "Section deleted successfully" });

};`;
