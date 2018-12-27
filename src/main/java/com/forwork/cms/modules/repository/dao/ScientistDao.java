package com.forwork.cms.modules.repository.dao;

import com.forwork.cms.common.utils.Query;
import com.forwork.cms.modules.repository.entity.*;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

public interface ScientistDao {

    List<ScSelf> list(Map<String, Object> params);

    List<ScCoordinate> colist(Map<String, Object> params);

    List<ScPaper> pplist(Map<String, Object> params);

    List<ScPatent> palist(Map<String, Object> params);

    List<ScProject> prlist(Map<String, Object> params);

    List<ScTeam> telist(Map<String, Object> params);

    int count(Map<String, Object> params);

    ScSelf get(String uri);

    int tecount(Query query);

    int pacount(Query query);

    int ppcount(Query query);

    int prcount(Query query);

    List<ScPaper> randomPpList(@Param("ids") List<Integer> ids);

    List<ScPatent> randomPaList(@Param("ids") List<Integer> ids);

    List<ScProject> randomPrList(@Param("ids") List<Integer> ids);

    List<ScTeam> randomTeList(@Param("ids") List<Integer> ids);


}
