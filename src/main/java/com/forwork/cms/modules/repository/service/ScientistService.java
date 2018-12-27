package com.forwork.cms.modules.repository.service;

import com.forwork.cms.common.utils.Query;
import com.forwork.cms.modules.repository.dao.ScientistDao;
import com.forwork.cms.modules.repository.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class ScientistService {

    @Autowired
    private ScientistDao dao;

    public List<ScSelf> list(Query query){
        return  dao.list(query);
    }
    public int count(Query query){
        return  dao.count(query);
    }
    public List<ScCoordinate> colist(Query query){
        return  dao.colist(query);
    }
    public List<ScPaper> pplist(Query query){
        return  dao.pplist(query);
    }
    public List<ScPatent> palist(Query query){
        return  dao.palist(query);
    }
    public List<ScProject> prlist(Query query){
        return  dao.prlist(query);
    }
    public List<ScTeam> telist(Query query){
        return  dao.telist(query);
    }
    public ScSelf get(String uri){
        return  dao.get(uri);
    }

    public int tecount(Query query) {
            return  dao.tecount(query);
    }
    public int pacount(Query query) {
        return  dao.pacount(query);
    }
    public int ppcount(Query query) {
        return  dao.ppcount(query);
    }
    public int prcount(Query query) {
        return  dao.prcount(query);
    }

    public List<ScPaper> randomPpList(List<Integer> ids) {
        return dao.randomPpList(ids);
    }

    public List<ScPatent> randomPaList(List<Integer> ids) {
        return dao.randomPaList(ids);
    }

    public List<ScProject> randomPrList(List<Integer> ids) {
        return dao.randomPrList(ids);
    }

    public List<ScTeam> randomTeList(List<Integer> ids) {
        return dao.randomTeList(ids);
    }
}
